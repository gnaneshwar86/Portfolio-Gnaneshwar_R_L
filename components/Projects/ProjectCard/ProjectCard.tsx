import NextImage from "next/image";

import { cleanLink, getGitHubOwnerAndRepoFromLink } from "@/utils/helpers";
import Link from "@/components/Shared/Link";
import { CloudinaryImage } from "contentlayer/generated";
import { GitHubLogo } from "@/components/Shared/Icons";
import IconFactory from "@/components/Shared/Icons/IconFactory";
import { forwardRef } from "react";

interface ProjectProps {
  slug: string;
  name: string;
  description: string;
  link?: string;
  githubLink?: string;
  image?: CloudinaryImage;
  iconName: string;
  placeholderImage: string;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectProps>(
  (
    {
      slug,
      name,
      description,
      image,
      link,
      githubLink,
      iconName,
      placeholderImage,
    }: ProjectProps,
    ref
  ): JSX.Element => {
    return (
      <div
        className="flex flex-col space-y-8 rounded-xl border-[1px] border-tertiary bg-secondary/50 p-4 md:flex-row md:space-y-0 md:space-x-8"
        ref={ref}
      >
        <div className="flex shrink-0 overflow-hidden rounded-lg md:w-72">
          <Link href={`/projects/${slug}`} className="w-full">
            <div className="relative h-40 w-full bg-secondary transition duration-200 hover:opacity-60 md:h-full">
              {image?.url ? (
                <NextImage
                  src={image.url}
                  alt={name}
                  className="rounded-xl object-cover"
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={placeholderImage}
                  unoptimized={!image.url.startsWith("http")}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <IconFactory
                    name={iconName}
                    className="h-16 w-16 rounded-xl bg-tertiary p-3 text-accent"
                  />
                </div>
              )}
            </div>
          </Link>
        </div>
        <div className="flex flex-1 flex-col justify-between py-2">
          <div className="flex flex-col space-y-3">
            <Link
              href={`/projects/${slug}`}
              className="transition duration-200 hover:opacity-60"
            >
              <h2 className="text-2xl font-bold leading-tight">{name}</h2>
            </Link>
            <p className="text-[0.95rem] leading-relaxed text-gray-400">{description}</p>
            
            <div className="flex flex-wrap items-center gap-y-2 pt-1 text-sm">
              {link && link !== "#" && (
                <div className="flex items-center">
                  <Link 
                    href={link} 
                    noHighlight 
                    className="font-bold text-accent hover:underline"
                  >
                    Live Demo
                  </Link>
                  {githubLink && githubLink !== "#" && (
                    <span className="mx-3 text-gray-600">|</span>
                  )}
                </div>
              )}
              {githubLink && githubLink !== "#" && (
                <Link 
                  href={githubLink} 
                  icon={<GitHubLogo />} 
                  noHighlight 
                  className="font-medium text-gray-300 hover:text-white transition"
                >
                  Source Code
                </Link>
              )}
            </div>
          </div>
          <Link href={`/projects/${slug}`} className="mt-4 inline-block w-fit" gradientUnderline>
            <p className="sr-only">Learn more about {name}</p>
            Learn More
          </Link>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
