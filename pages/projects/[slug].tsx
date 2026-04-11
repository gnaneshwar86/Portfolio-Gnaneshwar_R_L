import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NextImage from "next/image";

import Link from "@/components/Shared/Link";
import { allProjects, Project } from ".contentlayer/generated";
import IconFactory from "@/components/Shared/Icons/IconFactory";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/Common/MDXComponents";
import CustomGiscus from "@/components/Shared/CustomGiscus";
import { getGitHubOwnerAndRepoFromLink } from "@/utils/helpers";
import { GitHubLogo } from "@/components/Shared/Icons";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { NextSeo } from "next-seo";

interface ProjectPageProps {
  project: Project;
  projectImagePreview: string;
}

const SkillPage: NextPage<ProjectPageProps> = ({
  project,
  projectImagePreview,
}) => {
  const ProjectMDX = useMDXComponent(project.body.code);

  return (
    <>
      <NextSeo
        title={`${project.name} | Gnaneshwar`}
        description={project.description}
        openGraph={{
          url: `https://gnaneshwar.dev/projects/${project.slug}`,
          title: `${project.name} | Gnaneshwar`,
          description: project.description,
          images: [
            {
              url: project.image.url,
              width: project.image.width,
              height: project.image.height,
              alt: project.name,
            },
          ],
        }}
      />
      <div className="mt-8 flex items-center space-x-8">
        {project.logo ? (
          <div className="relative h-16 w-16 shrink-0 overflow-hidden">
            <NextImage
              src={project.logo}
              alt={project.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ) : (
          <IconFactory
            name={project.iconName}
            className="h-16 w-16 rounded-xl bg-tertiary p-2 shadow-md"
          />
        )}
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <p className="text-sm text-gray-300">{project.description}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        {project.link && project.link !== "#" && (
          <Link 
            href={project.link} 
            noHighlight 
            className="flex items-center gap-1.5 rounded-lg border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-bold text-accent transition hover:bg-accent hover:text-black"
          >
            Live Demo
          </Link>
        )}

        {project.githubLink && project.githubLink !== "#" && (
          <Link 
            href={project.githubLink} 
            icon={<GitHubLogo />} 
            noHighlight 
            className="flex items-center gap-1.5 rounded-lg border border-tertiary bg-secondary px-4 py-2 text-sm font-medium text-gray-200 transition hover:bg-tertiary hover:text-white"
          >
            Source Code
          </Link>
        )}
      </div>

      <div className="mt-16 overflow-hidden rounded-2xl border-[1px] border-tertiary p-0 shadow-md">
        <NextImage
          width={project.image.width}
          height={project.image.height}
          src={project.image.url}
          placeholder="blur"
          blurDataURL={projectImagePreview}
          alt={project.name}
          priority
          unoptimized={!project.image.url.startsWith("http")}
        />
      </div>

      <article>
        <div className="prose my-12 max-w-full leading-8">
          <ProjectMDX components={{ ...MDXComponents }} />
        </div>
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const project = allProjects.find(project => project.slug === params.slug);

    if (!project) {
      return {
        notFound: true,
      };
    }

    const projectImagePreview = await getPreviewImageUrl(project.image.url);

    return {
      props: {
        project,
        projectImagePreview,
      },
      revalidate: 60,
    };
  } catch (err) {
    console.error(`Error in getStaticProps for project link ${params.slug}:`, err);
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allProjects.map(project => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default SkillPage;
