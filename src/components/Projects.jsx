import {
  MdCheckCircle,
  MdArrowForward,
  MdConstruction,
  MdOpenInNew,
  MdCode,
  MdLiveHelp,
} from "react-icons/md";

import { FaGithub, FaReact } from "react-icons/fa";
import { SiFastapi, SiLinkerd, SiPostgresql } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Blood Donation & Emergency Assistance Platform",
      description:
        "A full-stack platform designed to connect blood donors with people who need emergency blood assistance through a secure and user-friendly system.",
      status: "Featured Project",
      statusColor: "text-tertiary",
      statusBg: "bg-tertiary/10",
      statusBorder: "border-tertiary/20",
      image:
        "/images/blood-donation.png",
      technologies: [
        "React",
        "Vite",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "JWT Authentication",
      ],
      features: [
        "User registration, login & JWT role-based access",
        "Donor profile management and blood group filtering",
        "Emergency blood request creation and management",
        "Admin dashboard with user and request management",
      ],
      Livelink: "https://blood-donation-platfrom.netlify.app/",
      featured: true,
    },

    {
      title: "Library Management System",
      description:
        "A Backend library management application for managing books, users, reservations, issued books, returns and overdue fines.",
      status: "Backend Project",
      statusColor: "text-secondary",
      statusBg: "bg-secondary/10",
      statusBorder: "border-secondary/20",
      image:
        "/images/library-management.png",
      technologies: [
        "React",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "Tailwind CSS",
      ],
      features: [
        "Admin dashboard for catalog and user management",
        "Book reservation and issue tracking",
        "Return management with overdue calculation",
        "Fine management for overdue books",
      ],
      Livelink: "https://library-management-bythasin.netlify.app/",
      featured: false,
    },
    {
      title: "FastAPI Todo Application",
      description:
        "A secure multi-user task management application with JWT authentication, role-based access control, and a FastAPI backend.",
      status: "Backend Project",
      statusColor: "text-primary",
      statusBg: "bg-primary/10",
      statusBorder: "border-primary/20",
      image: "/images/todo-application.png",

      technologies: [
        "Python",
        "FastAPI",
        "MySQL",
        "SQLAlchemy",
        "JWT",
        "Swagger UI",
      ],

      features: [
        "JWT authentication with user and admin roles",
        "Full CRUD operations for task management",
        "MySQL database integration using SQLAlchemy ORM",
        "Interactive API documentation with Swagger UI",
      ],

      Livelink: "https://transactions-app-fastapi.onrender.com/docs",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute -top-20 -right-20
        w-80 h-80
        rounded-full
        bg-primary/10
        blur-[120px]
        pointer-events-none"
      />

      <div
        className="absolute bottom-0 -left-20
        w-80 h-80
        rounded-full
        bg-secondary/10
        blur-[120px]
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
              uppercase
              tracking-[0.25em]
              text-primary"
            >
              Portfolio
            </span>
          </div>

          <div
            className="flex flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-5"
          >
            <div>
              <h2
                className="text-3xl md:text-5xl
                font-black
                tracking-tight
                text-white"
              >
                Selected{" "}
                <span
                  className="bg-gradient-to-r
                  from-primary
                  via-secondary
                  to-tertiary
                  bg-clip-text
                  text-transparent"
                >
                  Projects
                </span>
              </h2>

              <p
                className="mt-4
                max-w-2xl
                text-slate-400
                leading-7"
              >
                A collection of projects where I turn ideas into
                functional, scalable and user-focused applications.
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
              <span
                className="w-2 h-2
                rounded-full
                bg-primary
                animate-pulse"
              />

              03 Featured Projects
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-7">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden
              rounded-2xl
              border
              backdrop-blur-xl
              transition-all duration-500
              hover:-translate-y-1
              ${project.featured
                  ? "border-primary/20 bg-gradient-to-br from-primary/[0.07] via-white/[0.03] to-secondary/[0.04]"
                  : "border-white/10 bg-white/[0.03]"
                }`}
            >
              {/* Glow */}
              <div
                className={`absolute
                -top-24
                -right-24
                w-64 h-64
                rounded-full
                blur-[100px]
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-700
                ${project.featured
                    ? "bg-primary/15"
                    : "bg-secondary/10"
                  }`}
              />

              <div
                className="relative z-10
                grid lg:grid-cols-5"
              >
                {/* Project Image */}
                <div
                  className="lg:col-span-2
                  relative
                  min-h-[260px]
                  lg:min-h-[390px]
                  bg-black/20
                  overflow-hidden"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="absolute inset-0
                      w-full h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="absolute inset-0
                      flex items-center justify-center
                      bg-gradient-to-br
                      from-primary/10
                      via-slate-900
                      to-secondary/10"
                    >
                      <MdCode
                        className="text-7xl
                        text-primary/30"
                      />
                    </div>
                  )}

                  {/* Image Overlay */}
                  <div
                    className="absolute inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent"
                  />

                  {/* Status */}
                  <div
                    className={`absolute
                    top-4
                    left-4
                    inline-flex
                    items-center
                    gap-2
                    px-3 py-1.5
                    rounded-full
                    border
                    backdrop-blur-md
                    ${project.statusBg}
                    ${project.statusBorder}`}
                  >
                    <span
                      className={`w-2 h-2
                      rounded-full
                      bg-current
                      ${project.statusColor}`}
                    />

                    <span
                      className={`text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Project Number */}
                  <span
                    className="absolute
                    bottom-4
                    left-5
                    text-5xl
                    font-black
                    text-white/10"
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Project Content */}
                <div
                  className="lg:col-span-3
                  p-6 md:p-8
                  flex flex-col"
                >
                  <div>
                    <p
                      className="text-xs
                      font-mono
                      text-primary
                      mb-3"
                    >
                      PROJECT / 0{index + 1}
                    </p>

                    <h3
                      className="text-2xl md:text-3xl
                      font-black
                      tracking-tight
                      text-white"
                    >
                      {project.title}
                    </h3>

                    <p
                      className="mt-4
                      text-sm md:text-base
                      leading-7
                      text-slate-400
                      max-w-2xl"
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6">
                    <p
                      className="text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-slate-500
                      mb-3"
                    >
                      Tech Stack
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5
                          rounded-lg
                          border border-white/10
                          bg-white/[0.04]
                          text-xs
                          font-medium
                          text-slate-300
                          hover:bg-white/[0.08]
                          hover:text-white
                          transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-6">
                    <p
                      className="text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-slate-500
                      mb-3"
                    >
                      Key Features
                    </p>

                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex
                          items-start
                          gap-2
                          text-sm
                          text-slate-400"
                        >
                          <MdCheckCircle
                            className="mt-0.5
                            shrink-0
                            text-tertiary
                            text-lg"
                          />

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div
                    className="mt-7
                    pt-5
                    border-t
                    border-white/10
                    flex
                    flex-col
                    sm:flex-row
                    gap-3"
                  >
                    <a
                      href={project.Livelink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      px-5 py-3
                      rounded-xl
                      bg-gradient-to-r
                      from-primary
                      to-secondary
                      text-white
                      text-sm
                      font-bold
                      shadow-[0_8px_30px_rgba(120,80,255,0.2)]
                      hover:scale-[1.02]
                      transition-all duration-300"
                    >
                      <SiLinkerd className="text-lg" />
                      Live Link

                      <MdArrowForward
                        className="group-hover/btn:translate-x-1
                        transition-transform"
                      />
                    </a>

                    <a
                      href="#contact"
                      className="inline-flex
                      items-center
                      justify-center
                      gap-2
                      px-5 py-3
                      rounded-xl
                      border border-white/10
                      bg-white/[0.03]
                      text-slate-300
                      text-sm
                      font-semibold
                      hover:bg-white/[0.08]
                      hover:text-white
                      transition-all"
                    >
                      <MdOpenInNew />
                      Discuss Project
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon */}
        <div
          className="relative
          mt-7
          overflow-hidden
          rounded-2xl
          border border-dashed
          border-white/10
          bg-white/[0.02]
          p-7 md:p-9
          text-center
          group
          hover:border-primary/20
          transition-all duration-300"
        >
          <div
            className="absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-48 h-48
            rounded-full
            bg-primary/5
            blur-[70px]"
          />

          <div className="relative z-10">
            <div
              className="mx-auto
              w-14 h-14
              rounded-2xl
              flex items-center justify-center
              bg-primary/10
              border border-primary/15
              text-primary
              group-hover:scale-110
              transition-transform duration-300"
            >
              <MdConstruction className="text-2xl" />
            </div>

            <span
              className="inline-flex
              mt-4
              px-3 py-1
              rounded-full
              border border-white/10
              bg-white/[0.03]
              text-[10px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-slate-500"
            >
              More Projects Coming
            </span>

            <h3
              className="mt-3
              text-xl
              font-bold
              text-white"
            >
              Currently Building Something New
            </h3>

            <p
              className="mt-2
              max-w-md
              mx-auto
              text-sm
              leading-6
              text-slate-500"
            >
              More projects and experiments will be added as I
              continue learning and building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}