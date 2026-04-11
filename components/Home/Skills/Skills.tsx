import React from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "C++", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Backend & API Development",
    skills: ["Spring Boot", "RESTful APIs", "Microservices Architecture"],
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL", "Docker", "AWS (EC2)", "Git/GitHub"],
  },
  {
    title: "Core Concepts",
    skills: ["DSA", "OOP", "System Design", "Query Optimization"],
  },
];

const Skills = (): JSX.Element => {
  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold text-gray-100">Skills & Tech Stack</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="flex flex-col space-y-3 rounded-xl border-[1px] border-tertiary bg-secondary/50 p-5 transition duration-200 hover:border-accent"
          >
            <h3 className="text-lg font-semibold text-accent">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="rounded-full bg-tertiary px-3 py-1 text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
