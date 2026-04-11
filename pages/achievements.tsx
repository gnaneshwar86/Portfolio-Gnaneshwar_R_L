import AchievementCard from "@/components/Achievements/AchievementCard";
import { allAchievements } from ".contentlayer/generated";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { CleanedAchievement } from "types/achievements";
import Link from "@/components/Shared/Link";
import { ArrowRight } from "react-feather";

interface AchievementPageProps {
  achievements: CleanedAchievement[];
}

const AchievementsPage: NextPage<AchievementPageProps> = ({ achievements }) => {
  return (
    <>
      <NextSeo
        title="Achievements | Gnaneshwar"
        description="Gnaneshwar's Achievements"
      />
      <h1 className="mb-8 text-2xl font-bold">Achievements</h1>
      <div className="flex flex-col space-y-8">
        {achievements.map(({ id, title, content, date, proof }) => (
          <AchievementCard
            key={id}
            title={title}
            content={content}
            date={date}
            proof={proof}
          />
        ))}
      </div>
      <Link
        href="/resume"
        className="group mt-10 flex items-center justify-start space-x-2 text-xl font-medium"
      >
        <span>View Full Resume</span>
        <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
      </Link>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const cleanedAchievements = allAchievements.map(achievement => ({
    id: achievement._id,
    title: achievement.title,
    content: achievement.body.code,
    date: achievement.date ?? null,
    proof: achievement.proof ?? null,
  }));

  return {
    props: { achievements: cleanedAchievements },
  };
};

export default AchievementsPage;
