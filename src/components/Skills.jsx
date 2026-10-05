import {
  MdDevices,
  MdDns,
  MdStorage,
  MdTerminal,
  MdMemory,
  MdCode,
  MdArrowForward,
} from "react-icons/md";

import { FaReact, FaPython, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { SiFastapi, SiPostgresql, SiTailwindcss, SiJavascript, SiMysql } from "react-icons/si";

export default function Skills() {
  const frontend = [
    {
      name: "React.js",
      icon: <FaReact />,
      color: "text-cyan-400",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "text-yellow-400",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-cyan-300",
    },
    {
      name: "DaisyUI",
      icon: <MdCode />,
      color: "text-purple-400",
    },
    {
      name: "HTML5",
      icon: <MdCode />,
      color: "text-orange-400",
    },
    {
      name: "CSS3",
      icon: <MdCode />,
      color: "text-blue-400",
    },
  ];

  const backend = [
    {
      name: "FastAPI",
      icon: <SiFastapi />,
      color: "text-teal-400",
    },
    {
      name: "Python",
      icon: <FaPython />,
      color: "text-yellow-300",
    },
    {
      name: "REST API",
      icon: <MdDns />,
      color: "text-cyan-400",
    },
    {
      name: "JWT Authentication",
      icon: <MdCode />,
      color: "text-purple-400",
    },
    {
      name: "OAuth2",
      icon: <MdCode />,
      color: "text-pink-400",
    },
    {
      name: "SQLAlchemy",
      icon: <MdStorage />,
      color: "text-orange-400",
    },
  ];

  const database = [
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "text-sky-400",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "text-yellow-600",
    },
    {
      name: "SQL",
      icon: <MdStorage />,
      color: "text-blue-400",
    },
    {
      name: "Relational Database",
      icon: <MdStorage />,
      color: "text-purple-400",
    },
    {
      name: "Data Management",
      icon: <MdStorage />,
      color: "text-cyan-400",
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "text-orange-400",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "text-white",
    },
    {
      name: "Docker",
      icon: <FaDocker />,
      color: "text-blue-400",
    },
    {
      name: "Postman",
      icon: <MdTerminal />,
      color: "text-orange-400",
    },
    {
      name: "VS Code",
      icon: <MdCode />,
      color: "text-blue-400",
    },
  ];

  const fundamentals = [
    "C / C++",
    "Data Structures",
    "Algorithms",
    "OOP",
    "Problem Solving",
    "Operating Systems",
    "Software Engineering",
  ];

  const SkillCard = ({ icon, title, description, children, accent = "primary" }) => {
    return (
      <div
        className={`group relative overflow-hidden rounded-2xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-5 md:p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-white/[0.05]
        hover:border-${accent}/30`}
      >
        {/* Glow */}
        <div
          className={`absolute -right-10 -top-10
          w-28 h-28 rounded-full
          bg-${accent}/10
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500`}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div
              className={`w-11 h-11 rounded-xl
              flex items-center justify-center
              bg-${accent}/10
              text-${accent}
              group-hover:scale-110
              transition-transform duration-300`}
            >
              {icon}
            </div>

            <MdArrowForward
              className="text-slate-600
              group-hover:text-white
              group-hover:translate-x-1
              transition-all duration-300"
            />
          </div>

          <h3 className="mt-5 text-lg font-bold text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {children}
          </div>
        </div>
      </div>
    );
  };

  const SkillBadge = ({ icon, name, color = "text-slate-300" }) => {
    return (
      <span
        className="group/badge inline-flex items-center gap-2
        rounded-lg
        border border-white/10
        bg-white/[0.04]
        px-3 py-2
        text-sm font-medium
        text-slate-300
        transition-all duration-200
        hover:border-white/20
        hover:bg-white/[0.08]
        hover:text-white"
      >
        <span className={`${color} text-base`}>
          {icon}
        </span>

        {name}
      </span>
    );
  };

  return (
    <section
      id="skills"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute -top-20 -right-20
        w-72 h-72
        rounded-full
        bg-primary/10
        blur-[110px]
        pointer-events-none"
      />

      <div
        className="absolute bottom-0 -left-20
        w-72 h-72
        rounded-full
        bg-secondary/10
        blur-[110px]
        pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="w-10 h-[2px]
              bg-gradient-to-r
              from-primary
              to-secondary"
            />

            <span
              className="text-xs font-bold
              uppercase tracking-[0.25em]
              text-primary"
            >
              Skills & Technologies
            </span>
          </div>

          <div className="flex flex-col md:flex-row
            md:items-end md:justify-between gap-5"
          >
            <div>
              <h2
                className="text-3xl md:text-5xl
                font-black tracking-tight
                text-white"
              >
                My{" "}
                <span
                  className="bg-gradient-to-r
                  from-primary
                  via-secondary
                  to-tertiary
                  bg-clip-text
                  text-transparent"
                >
                  Tech Stack
                </span>
              </h2>

              <p
                className="mt-4 max-w-2xl
                text-slate-400
                leading-7"
              >
                Technologies and tools I use to build modern,
                scalable and user-focused web applications.
              </p>
            </div>

            <div
              className="hidden md:flex
              items-center gap-2
              px-4 py-2
              rounded-full
              border border-white/10
              bg-white/[0.03]
              text-xs font-mono
              text-slate-400"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Always learning
            </div>
          </div>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Frontend */}
          <SkillCard
            icon={<MdDevices className="text-2xl" />}
            title="Frontend Development"
            description="Building responsive and interactive user interfaces."
            accent="secondary"
          >
            {frontend.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </SkillCard>

          {/* Backend */}
          <SkillCard
            icon={<MdDns className="text-2xl" />}
            title="Backend & APIs"
            description="Developing secure and reliable backend services."
            accent="tertiary"
          >
            {backend.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </SkillCard>

          {/* Database */}
          <SkillCard
            icon={<MdStorage className="text-2xl" />}
            title="Database & ORM"
            description="Designing and working with relational data."
            accent="primary"
          >
            {database.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </SkillCard>

          {/* Tools */}
          <SkillCard
            icon={<MdTerminal className="text-2xl" />}
            title="Tools & Development"
            description="Tools I use throughout the development workflow."
            accent="secondary"
          >
            {tools.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </SkillCard>
        </div>

        {/* CS Fundamentals */}
        <div
          className="relative overflow-hidden
          mt-5
          rounded-2xl
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-5 md:p-6
          group
          hover:border-tertiary/30
          transition-all duration-300"
        >
          <div
            className="absolute -right-20 -bottom-20
            w-48 h-48
            rounded-full
            bg-tertiary/10
            blur-[70px]
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-500"
          />

          <div
            className="relative z-10
            flex flex-col md:flex-row
            md:items-center
            gap-5"
          >
            <div className="flex items-center gap-4 md:min-w-[230px]">
              <div
                className="w-11 h-11
                rounded-xl
                flex items-center justify-center
                bg-tertiary/10
                text-tertiary
                group-hover:scale-110
                transition-transform duration-300"
              >
                <MdMemory className="text-2xl" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  CS Fundamentals
                </h3>

                <p className="text-sm text-slate-500">
                  Core knowledge
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {fundamentals.map((item) => (
                <span
                  key={item}
                  className="px-3 py-2
                  rounded-lg
                  border border-white/10
                  bg-white/[0.04]
                  text-sm
                  font-medium
                  text-slate-300
                  hover:bg-white/[0.08]
                  hover:text-white
                  hover:border-tertiary/30
                  transition-all duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div
          className="mt-6 text-center"
        >
          <p
            className="text-sm text-slate-500"
          >
            <span className="text-primary font-semibold">
              Learning
            </span>{" "}
            •{" "}
            <span className="text-secondary font-semibold">
              Building
            </span>{" "}
            •{" "}
            <span className="text-tertiary font-semibold">
              Improving
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}