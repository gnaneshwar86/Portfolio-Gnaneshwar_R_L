import { GetStaticProps, NextPage } from "next";

import ProjectCard from "@/components/Projects/ProjectCard";

import { allProjects, Project } from ".contentlayer/generated";
import Link from "@/components/Shared/Link";
import { ArrowRight } from "react-feather";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { NextSeo } from "next-seo";

export interface ProjectWithPlaceholderImage extends Project {
  placeholderImage: string;
}

interface ProjectsPageProps {
  allProjectsWithPlaceholderImages: ProjectWithPlaceholderImage[];
}

const ProjectsPage: NextPage<ProjectsPageProps> = ({
  allProjectsWithPlaceholderImages,
}) => {
  return (
    <>
      <NextSeo
        title="Projects | Gnaneshwar"
        description="Projects worked upon by Gnaneshwar"
      />
      <h1 className="mb-8 text-2xl font-bold">Projects</h1>
      <div className="flex-col space-y-8">
        {allProjectsWithPlaceholderImages.map((project, index) => (
          <ProjectCard
            key={project._id}
            name={project.name}
            description={project.description}
            link={project.link}
            githubLink={project.githubLink}
            iconName={project.iconName}
            slug={project.slug}
            image={project.image}
            placeholderImage={project.placeholderImage}
          />
        ))}
      </div>
      <Link
        href="https://github.com/gnaneshwar86"
        className="group mt-8 flex flex-row items-center justify-start space-x-2 text-xl font-medium"
        noExternalLinkIcon
      >
        <span>View more on GitHub</span>
        <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
      </Link>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const allProjectsWithPlaceholderImages = await Promise.all(
      allProjects.map(async project => {
        try {
          // Default placeholder if image or url is missing
          let previewUrl = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
          
          if (project.image?.url) {
            previewUrl = await getPreviewImageUrl(project.image.url);
          }

          return {
            ...project,
            placeholderImage: previewUrl,
          };
        } catch (err) {
          console.error(`Error processing project ${project.slug}:`, err);
          return {
            ...project,
            placeholderImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
          };
        }
      })
    );

    return {
      props: { allProjectsWithPlaceholderImages },
      revalidate: 60,
    };
  } catch (err) {
    console.error("Error in getStaticProps for projects index:", err);
    return {
      props: { allProjectsWithPlaceholderImages: [] },
      revalidate: 60,
    };
  }
};

export default ProjectsPage;
