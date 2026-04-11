import type { GetStaticProps, NextPage } from "next";

import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import Projects from "@/components/Home/Projects";
import BlogPosts from "@/components/Home/BlogPosts";

import hashnodeData from "../hashnode.json";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { HashnodePostWithPlaceHolderImage } from "types/hashnode";
import Contact from "@/components/Home/Contact";

interface HomePageProps {
  blogPosts: HashnodePostWithPlaceHolderImage[];
}

const HomePage: NextPage<HomePageProps> = ({ blogPosts }) => {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      {blogPosts.length > 0 && (
        <BlogPosts posts={blogPosts} domain={hashnodeData.domain} />
      )}
      <Contact />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = hashnodeData.posts || [];

    const hashnodePostsWithPlaceholderImages = await Promise.all(
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
      props: { blogPosts: hashnodePostsWithPlaceholderImages },
      revalidate: 60,
    };
  } catch (err) {
    console.error("Error in getStaticProps for Home page:", err);
    return {
      props: { blogPosts: [] },
      revalidate: 60,
    };
  }
};

export default HomePage;
