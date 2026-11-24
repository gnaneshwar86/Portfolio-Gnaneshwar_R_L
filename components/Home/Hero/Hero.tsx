import Socials from "@/components/Shared/Socials";
import NextImage from "next/image";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:space-y-0 mt-12">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="will-change-opacity text-5xl font-bold will-change-transform">
          Gnaneshwar R L
        </h1>
        <h2 className="will-change-opacity text-lg font-medium text-gray-400 will-change-transform">
          Full Stack Developer &nbsp;•&nbsp; DevOps Enthusiast <br />
          Problem Solver &nbsp;•&nbsp; Tech Enthusiast
        </h2>
        <p className="text-md will-change-opacity text-lg text-gray-300 will-change-transform">
          Software Development Engineer with expertise in Full Stack development and DevOps.
          I design, build, and deploy scalable, production-grade applications with a strong
          focus on performance, reliability, and clean architecture.
        </p>
        <Socials className="!mt-12" />
      </div>
      <div className="will-change-opacity relative h-32 w-32 overflow-hidden rounded-full will-change-transform">
        <NextImage
          src="/static/images/avatar.png"
          layout="fill"
          placeholder="blur"
          alt="Gnaneshwar R L"
        />
      </div>
    </div>
  );
};

export default Hero;
