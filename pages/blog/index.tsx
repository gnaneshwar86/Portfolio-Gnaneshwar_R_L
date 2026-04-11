import { GetStaticProps, NextPage } from "next";

import hashnodeData from "../../hashnode.json";
import BlogPostCard from "@/components/Blog/BlogPostCard";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { HashnodePostWithPlaceHolderImage } from "types/hashnode";
import { NextSeo } from "next-seo";

interface BlogPostsPageProps {
  posts: HashnodePostWithPlaceHolderImage[];
}

const BlogPostsPage: NextPage<BlogPostsPageProps> = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="Blog Posts | Gnaneshwar"
        description={`Blog posts by Gnaneshwar R L`}
      />
      <h1 className="mb-8 text-2xl font-bold">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {posts.map(post => (
          <BlogPostCard
            key={post._id}
            title={post.title}
            image={post.coverImage}
            placeholderImage={post.placeholderImage}
            date={post.dateAdded}
            readingTime={post.readingTime.text}
            excerpt={post.brief}
            url={`https://${hashnodeData.domain}/${post.slug}`}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = hashnodeData.posts || [];

    const postsWithPlaceholderImages = await Promise.all(
      posts.map(async post => {
        try {
          const previewUrl = await getPreviewImageUrl(post.coverImage);
          return {
            ...post,
            placeholderImage: previewUrl,
          };
        } catch (err) {
          console.error(`Error processing blog post ${post.title}:`, err);
          return {
            ...post,
            placeholderImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
          };
        }
      })
    );

    return {
      props: { posts: postsWithPlaceholderImages },
      revalidate: 60,
    };
  } catch (err) {
    console.error("Error in getStaticProps for blog index:", err);
    return {
      props: { posts: [] },
      revalidate: 60,
    };
  }
};

export default BlogPostsPage;
