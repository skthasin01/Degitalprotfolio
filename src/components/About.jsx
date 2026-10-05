import {
  MdBolt,
  MdDownload,
  MdCode,
  MdStorage,
  MdApi,
  MdSchool,
  MdArrowForward,
} from "react-icons/md";

import { FaReact } from "react-icons/fa";
import { SiFastapi, SiPostgresql } from "react-icons/si";

export default function About() {
  return (
    <section
      id="aboutme"
      className="relative py-16 md:py-24"
    >

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-64 h-64
        bg-primary/10 rounded-full blur-[100px]
        pointer-events-none"
      />

      <div className="absolute bottom-0 -right-20 w-72 h-72
        bg-secondary/10 rounded-full blur-[110px]
        pointer-events-none"
      />


      <div className="relative z-10 max-w-6xl mx-auto">


        {/* ================= HEADER ================= */}

        <div className="mb-10">

          <div className="flex items-center gap-3 mb-4">

            <span className="w-10 h-[2px] bg-gradient-to-r
              from-primary to-secondary"
            />

            <span className="text-xs font-bold uppercase
              tracking-[0.25em] text-primary"
            >
              About Me
            </span>

          </div>


          <h2 className="text-3xl md:text-5xl font-black
            tracking-tight text-white"
          >
            A little bit about{" "}
            <span className="bg-gradient-to-r
              from-primary
              via-secondary
              to-tertiary
              bg-clip-text text-transparent"
            >
              me
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400 leading-7">
            I'm a Computer Science & Engineering student who enjoys
            learning, building projects, and exploring modern web
            technologies.
          </p>

        </div>


        {/* ================= MAIN CARD ================= */}

        <div className="grid lg:grid-cols-5 gap-6">


          {/* LEFT CONTENT */}

          <div className="lg:col-span-3
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-6 md:p-8
            shadow-2xl"
          >

            <div className="space-y-5 text-slate-400 leading-7">

              <p>
                I'm currently studying{" "}
                <span className="text-white font-semibold">
                  Computer Science & Engineering
                </span>{" "}
                at{" "}
                <span className="text-primary font-semibold">
                  North Western University, Khulna
                </span>
                .
              </p>


              <p>
                I started my programming journey by learning the
                fundamentals of programming and gradually became
                interested in building complete web applications.
                Today, I enjoy working across both frontend and
                backend development.
              </p>


              <p>
                My current development stack includes{" "}
                <span className="text-white font-medium">
                  React.js, FastAPI, PostgreSQL
                </span>{" "}
                and REST APIs. I enjoy connecting frontend interfaces
                with reliable backend services and turning ideas into
                working applications.
              </p>


              <p>
                I'm also interested in improving my problem-solving
                skills and continuously learning new concepts that
                can help me become a better software developer.
              </p>

            </div>


            {/* Currently Focused */}

            <div className="mt-7 p-4 rounded-xl
              border border-primary/15
              bg-primary/[0.05]"
            >

              <div className="flex items-center gap-2
                text-primary mb-2"
              >

                <MdBolt className="text-xl" />

                <span className="text-xs font-bold
                  uppercase tracking-[0.18em]"
                >
                  Currently Focused On
                </span>

              </div>

              <p className="text-sm md:text-base
                font-medium text-slate-200"
              >
                Full-Stack Web Development · REST APIs ·
                Problem Solving · Software Engineering
              </p>

            </div>


            {/* Resume */}

            <div className="mt-7">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2
                  px-5 py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-primary
                  to-secondary
                  text-white
                  font-semibold
                  shadow-[0_8px_30px_rgba(120,80,255,0.25)]
                  hover:scale-[1.03]
                  transition-all duration-300"
              >

                <MdDownload className="text-xl
                  group-hover:-translate-y-0.5
                  transition-transform"
                />

                Download Resume

                <MdArrowForward
                  className="group-hover:translate-x-1
                    transition-transform"
                />

              </a>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div className="lg:col-span-2 grid sm:grid-cols-2
            lg:grid-cols-1 gap-4"
          >


            {/* Education */}

            <div className="group p-5 rounded-2xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              hover:border-primary/30
              hover:bg-white/[0.05]
              transition-all duration-300"
            >

              <div className="w-11 h-11 rounded-xl
                flex items-center justify-center
                bg-primary/10
                text-primary
                mb-4
                group-hover:scale-110
                transition-transform"
              >

                <MdSchool className="text-2xl" />

              </div>

              <h3 className="text-white font-bold text-lg">
                Education
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                B.Sc. in Computer Science & Engineering
              </p>

              <p className="mt-1 text-xs text-slate-500">
                North Western University, Khulna
              </p>

            </div>


            {/* Frontend */}

            <div className="group p-5 rounded-2xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              hover:border-secondary/30
              hover:bg-white/[0.05]
              transition-all duration-300"
            >

              <div className="flex gap-3 mb-4">

                <div className="w-11 h-11 rounded-xl
                  flex items-center justify-center
                  bg-cyan-400/10
                  text-cyan-400
                  group-hover:scale-110
                  transition-transform"
                >

                  <FaReact className="text-2xl" />

                </div>

                <div className="w-11 h-11 rounded-xl
                  flex items-center justify-center
                  bg-teal-400/10
                  text-teal-400
                  group-hover:scale-110
                  transition-transform"
                >

                  <SiFastapi className="text-2xl" />

                </div>

              </div>

              <h3 className="text-white font-bold text-lg">
                Development
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                React.js · FastAPI · REST API
              </p>

            </div>


            {/* Database */}

            <div className="group p-5 rounded-2xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              hover:border-tertiary/30
              hover:bg-white/[0.05]
              transition-all duration-300"
            >

              <div className="w-11 h-11 rounded-xl
                flex items-center justify-center
                bg-sky-400/10
                text-sky-400
                mb-4
                group-hover:scale-110
                transition-transform"
              >

                <SiPostgresql className="text-2xl" />

              </div>

              <h3 className="text-white font-bold text-lg">
                Database
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                PostgreSQL · SQL · Data Management
              </p>

            </div>


            {/* Problem Solving */}

            <div className="group p-5 rounded-2xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              hover:border-primary/30
              hover:bg-white/[0.05]
              transition-all duration-300"
            >

              <div className="w-11 h-11 rounded-xl
                flex items-center justify-center
                bg-purple-400/10
                text-purple-400
                mb-4
                group-hover:scale-110
                transition-transform"
              >

                <MdCode className="text-2xl" />

              </div>

              <h3 className="text-white font-bold text-lg">
                Problem Solving
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Algorithms · Data Structures · Competitive Programming
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}