import { NextPage } from "next";
import NextLink from "next/link";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, Download, MapPin, Phone, Mail, ExternalLink, FileText } from "react-feather";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const ResumePage: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <NextSeo
        title="Resume | Gnaneshwar R L"
        description="Resume of Gnaneshwar R L – Software Development Engineer"
      />
      {mounted && (
        <motion.div
          className="max-w-[860px] mx-auto pt-8 pb-24"
          initial="hidden"
          animate="visible"
        >
          {/* ── BACK BUTTON ── */}
          <motion.div variants={fadeUp} custom={0} className="mb-8">
            <NextLink href="/achievements">
              <a className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-gray-400 hover:text-white transition-colors">
                <ArrowLeft size={16} />
                Back to Achievements
              </a>
            </NextLink>
          </motion.div>

          {/* ── HEADER ── */}
          <motion.div variants={fadeUp} custom={1} className="mb-10 pb-8 border-b border-gray-700">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-none">
                  Gnaneshwar R L
                </h1>
                <h2 className="text-lg mt-2 font-semibold text-accent">
                  Software Development Engineer
                </h2>
                <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-1 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <MapPin size={13} /> Hosur, Tamil Nadu, India
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone size={13} /> +91 8608698986
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail size={13} /> gnaneshwarnani8605@gmail.com
                  </span>
                </div>
                <div className="mt-3 flex flex-row flex-wrap gap-4 text-sm text-gray-400">
                  <a
                    href="https://linkedin.com/in/gnaneshwar86"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <ExternalLink size={14} /> linkedin.com/in/gnaneshwar86
                  </a>
                  <a
                    href="https://github.com/gnaneshwar86"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <ExternalLink size={14} /> github.com/gnaneshwar86
                  </a>
                </div>
              </div>
              <a
                href="/static/resume/GNANESHWAR_R_L_RESUME.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-accent text-black hover:opacity-90 transition-opacity whitespace-nowrap self-start md:self-auto"
              >
                <Download size={14} /> Download Resume
              </a>
            </div>
          </motion.div>

          {/* ── SUMMARY ── */}
          <motion.section variants={fadeUp} custom={2} className="mb-12">
            <SectionHeading>Summary</SectionHeading>
            <p className="text-[1rem] leading-relaxed text-gray-300">
              Software Development Engineer with experience designing scalable software solutions and backend
              systems using <strong className="text-white">Java</strong> and <strong className="text-white">Spring Boot</strong>.
              Strong foundation in <strong className="text-white">Data Structures</strong>, <strong className="text-white">Algorithms</strong>,
              and Software Engineering principles, with hands-on experience in API development, query optimization,
              microservices-style architecture, and cloud platforms (<strong className="text-white">AWS</strong>).
              <br /><br />
              Experienced in writing clean, maintainable code, participating in technical discussions, and building
              production-ready applications.
            </p>
          </motion.section>

          {/* ── SKILLS ── */}
          <motion.section variants={fadeUp} custom={3} className="mb-12">
            <SectionHeading>Skills</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Programming Languages", content: "Java, C++, Python, JavaScript, SQL" },
                { title: "Backend Development", content: "Spring Boot, Flask, RESTful APIs, Node.js" },
                { title: "Frontend Development", content: "React.js, HTML5, CSS3" },
                { title: "Databases", content: "MySQL, DBMS Concepts" },
                { title: "AI/ML Fundamentals", content: "NumPy, Pandas, PyTorch, Data Preprocessing" },
                { title: "Cloud Platforms & Tools", content: "AWS, Docker, CI/CD, Git, GitHub, Linux" },
              ].map((s, i) => (
                <SkillCard key={i} title={s.title} content={s.content} />
              ))}
              <div className="md:col-span-2 rounded-xl border border-gray-700 bg-secondary/50 p-5">
                <h4 className="font-bold text-white mb-3">Core Computer Science Concepts</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Programming",
                    "Software Engineering Principles",
                    "System Design",
                    "Query Optimization",
                  ].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-tertiary text-gray-300 border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── EDUCATION ── */}
          <motion.section variants={fadeUp} custom={4} className="mb-12">
            <SectionHeading>Education</SectionHeading>
            <div className="rounded-xl border border-gray-700 bg-secondary/50 p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                <h4 className="text-[1.1rem] font-bold text-white">
                  Sri Krishna College of Engineering and Technology
                </h4>
                <span className="font-semibold px-3 py-1 rounded-full text-xs bg-accent text-black whitespace-nowrap self-start">
                  2023 – 2027
                </span>
              </div>
              <p className="text-[0.95rem] font-medium text-gray-300">
                Bachelor of Engineering – Computer Science and Engineering
              </p>
              <p className="text-[0.9rem] font-bold mt-2 text-accent">CGPA: 8.47</p>
            </div>
          </motion.section>

          {/* ── EXPERIENCE ── */}
          <motion.section variants={fadeUp} custom={5} className="mb-12">
            <SectionHeading>Experience</SectionHeading>
            <div className="flex flex-col space-y-6">
              <ExperienceEntry
                title="Product Development Intern"
                company="Digihutglobal"
                dates="June 2026 – Present"
                points={[
                  "Developed workflows for consolidating scanner findings, prioritizing security risks, and generating actionable dashboards and reports.",
                  "Supported platform reliability through testing, bug fixes, secure access controls, and Docker-based deployment workflows.",
                ]}
              />
              <ExperienceEntry
                title="Software Development Engineer (SDE) Intern"
                company="Bluestock Fintech"
                dates="March 2026 – April 2026"
                points={[
                  "Worked on software development tasks and backend application features in a fintech environment, gaining hands-on experience in real-world software engineering workflows.",
                ]}
              />
            </div>
            <NextLink href="/experience">
              <a className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white">
                View Experience Page
                <span className="transition duration-200 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </a>
            </NextLink>
          </motion.section>

          {/* ── PROJECTS ── */}
          <motion.section variants={fadeUp} custom={6} className="mb-12">
            <SectionHeading>Projects</SectionHeading>
            <div className="flex flex-col space-y-8">
              <ProjectEntry
                title="EventMate – Full-Stack College Event Management System"
                tech="React.js, Spring Boot, MySQL, Material UI"
                points={[
                  "Designed and developed scalable backend solutions using Spring Boot and MySQL in a microservices-style architecture.",
                  "Implemented REST APIs, query optimization, pagination, and JWT-based authentication to improve system performance and security.",
                  "Deployed containerized applications using Docker on AWS EC2 while following clean coding and testing practices.",
                ]}
                githubLink="https://github.com/gnaneshwar86/EventMate-CollegeEventManagementSystem"
                liveLink="https://eventmate-eta.vercel.app/"
              />
              <ProjectEntry
                title="AI-Powered Plant Disease Detection System"
                tech="Python, PyTorch, EfficientNet, Flask, Pandas, NumPy"
                points={[
                  "Developed an end-to-end deep learning application to classify plant leaf images into 39 disease categories using EfficientNet transfer learning.",
                  "Built and optimized the machine learning pipeline, including preprocessing, data augmentation, training, validation, evaluation, and inference.",
                  "Created a Flask-based application for real-time image uploads and diagnosis, displaying confidence scores, top-k predictions, and disease-specific recommendations.",
                ]}
              />
              <ProjectEntry
                title="GKart - Grocery E-Commerce Platform"
                tech="React.js, Spring Boot, MySQL, Tailwind CSS, REST APIs"
                points={[
                  "Developed a full-stack grocery e-commerce application with secure user authentication, product management, shopping cart, and order processing.",
                  "Built responsive user and admin dashboards with CRUD operations, role-based access control, and frontend-backend integration.",
                  "Used Spring Data JPA, RESTful services, and reusable React components to create a maintainable application.",
                ]}
                githubLink="https://github.com/gnaneshwar86/GKart"
              />
            </div>
          </motion.section>

          {/* ── ACHIEVEMENTS ── */}
          <motion.section variants={fadeUp} custom={7} className="mb-12">
            <SectionHeading>Achievements</SectionHeading>
            <ul className="list-disc list-outside ml-5 space-y-2 text-[0.95rem] text-gray-300">
              <li>Solved <strong className="text-white">300+ Data Structures and Algorithms</strong> problems on LeetCode, strengthening problem-solving and coding efficiency.</li>
              <li>Finalist - <strong className="text-white">TechMCode 2026 Hackathon</strong>, recognized for developing an innovative solution in a competitive national-level hackathon.</li>
              <li>Qualified for the <strong className="text-white">Inter-College Round of SAP Hackfest 2025</strong>.</li>
              <li>Selected as a <strong className="text-white">College-Level Qualifier for Smart India Hackathon (SIH) 2024</strong>.</li>
              <li>Participated in <strong className="text-white">IDEATHON at SKCET</strong>.</li>
            </ul>
          </motion.section>

          {/* ── PDF VIEWER ── */}
          <motion.div
            variants={fadeUp}
            custom={8}
            className="mt-4 rounded-xl overflow-hidden border border-gray-700"
            style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
          >
            <div className="bg-gray-900 px-4 py-3 flex flex-wrap justify-between items-center gap-2 border-b border-gray-700">
              <span className="text-sm font-semibold flex items-center gap-2 text-gray-300">
                <FileText size={14} className="text-red-400" /> Resume Preview
              </span>
              <a
                href="/static/resume/GNANESHWAR_R_L_RESUME.pdf"
                download
                className="text-xs px-3 py-1.5 rounded font-bold hover:opacity-90 transition-opacity flex items-center gap-1.5 bg-accent text-black"
              >
                <Download size={12} /> Download
              </a>
            </div>
            <iframe
              src="/static/resume/GNANESHWAR_R_L_RESUME.pdf#navpanes=0&scrollbar=0&view=FitH"
              title="Gnaneshwar R L Resume"
              className="w-full h-[600px] sm:h-[800px] md:h-[1100px] bg-gray-950"
              style={{ border: "none" }}
            >
              <p className="text-white p-4">
                Unable to display PDF file.{" "}
                <a href="/static/resume/GNANESHWAR_R_L_RESUME.pdf" download className="text-accent underline">
                  Download instead
                </a>
              </p>
            </iframe>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

// ── Reusable Sub-components ──────────────────────────────────────────────────

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-bold mb-6 pb-1 border-b-2 border-accent inline-block uppercase tracking-wide text-white">
    {children}
  </h3>
);

const SkillCard = ({ title, content }: { title: string; content: string }) => (
  <div className="rounded-xl border border-gray-700 bg-secondary/50 p-5">
    <h4 className="font-bold text-white mb-2">{title}</h4>
    <p className="text-gray-400 text-sm">{content}</p>
  </div>
);

const ExperienceEntry = ({
  title,
  company,
  dates,
  points,
}: {
  title: string;
  company: string;
  dates: string;
  points: string[];
}) => (
  <div className="rounded-xl border border-gray-700 bg-secondary/50 p-6">
    <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h4 className="text-[1.05rem] font-bold text-white">{title}</h4>
        <p className="text-sm font-medium text-accent">{company}</p>
      </div>
      <span className="text-sm text-gray-400">{dates}</span>
    </div>
    <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-gray-300">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const ProjectEntry = ({
  title,
  tech,
  points,
  githubLink,
  liveLink,
}: {
  title: string;
  tech: string;
  points: string[];
  githubLink?: string;
  liveLink?: string;
}) => (
  <div className="rounded-xl border border-gray-700 bg-secondary/50 p-6">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
      <h4 className="text-[1.05rem] font-bold text-white">{title}</h4>
      <div className="flex gap-3 shrink-0">
        {liveLink && liveLink !== "#" && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">
            Live ↗
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-white transition-colors">
            GitHub ↗
          </a>
        )}
      </div>
    </div>
    <p className="text-xs font-semibold mb-4 text-accent">{tech}</p>
    <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-gray-300">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>
);

export default ResumePage;
