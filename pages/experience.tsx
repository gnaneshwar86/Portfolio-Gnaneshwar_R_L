import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "react-feather";

import Link from "@/components/Shared/Link";

const experience = [
  {
    id: "digihutglobal",
    role: "Product Development Intern",
    company: "Digihutglobal",
    period: "June 2026 – Present",
    points: [
      "Developed workflows for consolidating scanner findings, prioritizing security risks, and generating actionable dashboards and reports.",
      "Supported platform reliability through testing, bug fixes, secure access controls, and Docker-based deployment workflows.",
    ],
  },
  {
    id: "bluestock-fintech",
    role: "Software Development Engineer (SDE) Intern",
    company: "Bluestock Fintech",
    period: "March 2026 – April 2026",
    points: [
      "Worked on software development tasks and backend application features in a fintech environment, gaining hands-on experience in real-world software engineering workflows.",
    ],
  },
];

const ExperiencePage: NextPage = () => (
  <>
    <NextSeo
      title="Experience | Gnaneshwar R L"
      description="Professional experience and contributions of Gnaneshwar R L."
    />
    <div className="mx-auto max-w-4xl py-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="mb-3 text-2xl font-bold text-gray-100">Experience</h1>
        <p className="mb-10 max-w-2xl text-gray-400">
          Professional roles and selected contributions across product development and software engineering.
        </p>

        <ol className="relative ml-3 border-l border-tertiary">
          {experience.map((item, index) => (
            <motion.li
              key={item.id}
              className="relative mb-8 ml-7 last:mb-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
            >
              <span
                aria-hidden="true"
                className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full border-2 border-primary bg-accent"
              />
              <article className="rounded-xl border border-tertiary bg-secondary/50 p-5 transition duration-200 hover:border-accent sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-100">{item.role}</h2>
                    <p className="mt-1 font-medium text-accent">{item.company}</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-tertiary bg-primary/50 px-3 py-1 text-sm text-gray-300">
                    <Calendar className="h-4 w-4 text-accent" aria-hidden="true" />
                    {item.period}
                  </span>
                </div>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300 marker:text-accent">
                  {item.points.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ol>

        <Link
          href="/resume"
          className="group mt-10 inline-flex items-center space-x-2 text-lg font-medium"
        >
          <span>View Full Resume</span>
          <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  </>
);

export default ExperiencePage;
