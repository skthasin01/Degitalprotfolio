import {
  MdAlternateEmail,
  MdDownload,
  MdArrowForward,
  MdLocationOn,
} from "react-icons/md";

import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiFastapi, SiPostgresql } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center justify-center px-5 py-16">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Main glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2
          w-[500px] h-[500px]
          bg-primary/10 rounded-full blur-[130px]"
        />

        <div className="absolute top-1/3 -left-32
          w-72 h-72
          bg-secondary/10 rounded-full blur-[100px]"
        />

        <div className="absolute bottom-0 -right-32
          w-80 h-80
          bg-tertiary/10 rounded-full blur-[110px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>


      {/* ================= CONTENT ================= */}

      <div className="relative z-10 w-full max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">


          {/* ================= LEFT SIDE ================= */}

          <div className="text-center lg:text-left order-2 lg:order-1">

            {/* Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2
              rounded-full
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              shadow-lg
              mb-6"
            >

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full
                  rounded-full bg-emerald-400 opacity-75 animate-ping"
                />
                <span className="relative inline-flex
                  rounded-full h-2.5 w-2.5 bg-emerald-400"
                />
              </span>

              <span className="text-xs font-semibold tracking-[0.18em]
                uppercase text-slate-300"
              >
                Available for Opportunities
              </span>

            </div>


            {/* Greeting */}
            <p className="text-sm md:text-base text-slate-400 mb-3">
              Hello, I'm
            </p>


            {/* NAME */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl
              font-black tracking-tight leading-[1.05]"
            >

              <span className="text-white">
                Sheikh
              </span>

              <br />

              <span className="bg-gradient-to-r
                from-primary
                via-secondary
                to-tertiary
                bg-clip-text text-transparent"
              >
                Thasin Rahman
              </span>

              <br />

              <span className="text-white">
                Shiplu
              </span>

            </h1>


            {/* Developer Badge */}
            <div className="mt-6 inline-flex items-center gap-3
              px-4 py-2.5
              rounded-xl
              border border-primary/20
              bg-primary/5
              backdrop-blur-md"
            >

              <span className="text-primary text-lg">
                &lt;/&gt;
              </span>

              <span className="font-semibold text-slate-200">
                FastAPI & React.js Developer
              </span>

            </div>


            {/* Description */}
            <p className="mt-7 max-w-xl mx-auto lg:mx-0
              text-base md:text-lg
              leading-8
              text-slate-400"
            >
              Computer Science & Engineering student passionate about
              building modern, responsive and scalable web applications
              with <span className="text-white font-medium">React</span>,
              <span className="text-white font-medium"> FastAPI</span>,
              <span className="text-white font-medium"> PostgreSQL</span> and
              REST APIs.
            </p>


            {/* Location */}
            <div className="mt-5 flex items-center justify-center lg:justify-start
              gap-2 text-sm text-slate-500"
            >
              <MdLocationOn className="text-primary text-lg" />
              Khulna, Bangladesh
            </div>


            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row
              gap-4 justify-center lg:justify-start"
            >

              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center
                  gap-2
                  px-7 py-3.5
                  rounded-xl
                  bg-gradient-to-r
                  from-primary
                  to-secondary
                  text-white
                  font-bold
                  shadow-[0_10px_40px_rgba(120,80,255,0.35)]
                  hover:scale-[1.03]
                  transition-all duration-300"
              >

                <MdDownload className="text-xl group-hover:-translate-y-0.5 transition-transform" />

                View Resume

              </a>


              {/* Contact */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center
                  gap-2
                  px-7 py-3.5
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-md
                  text-white
                  font-semibold
                  hover:bg-white/[0.08]
                  hover:border-primary/40
                  transition-all duration-300"
              >

                <MdAlternateEmail className="text-xl text-secondary" />

                Contact Me

                <MdArrowForward
                  className="group-hover:translate-x-1 transition-transform"
                />

              </a>

            </div>


            {/* Social */}
            <div className="mt-9 flex items-center justify-center lg:justify-start gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/skthasin01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group w-11 h-11
                  flex items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  text-slate-400
                  hover:text-white
                  hover:bg-white/[0.09]
                  hover:-translate-y-1
                  transition-all duration-300"
              >
                <FaGithub className="text-xl" />
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/thasin-rahman/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11
                  flex items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  text-slate-400
                  hover:text-blue-400
                  hover:bg-white/[0.09]
                  hover:-translate-y-1
                  transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
              </a>


              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/thasin_rahman/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="w-11 h-11
                  flex items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  text-slate-400
                  hover:text-yellow-400
                  hover:bg-white/[0.09]
                  hover:-translate-y-1
                  transition-all duration-300"
              >
                <SiLeetcode className="text-xl" />
              </a>


              {/* Codeforces */}
              <a
                href="https://codeforces.com/profile/sheikhthasinrahman01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Codeforces"
                className="w-11 h-11
                  flex items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  text-slate-400
                  hover:text-blue-400
                  hover:bg-white/[0.09]
                  hover:-translate-y-1
                  transition-all duration-300"
              >
                <SiCodeforces className="text-xl" />
              </a>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div className="relative flex justify-center order-1 lg:order-2">

            {/* Big glow */}
            <div className="absolute
              w-[320px] h-[320px] md:w-[430px] md:h-[430px]
              rounded-full
              bg-gradient-to-r
              from-primary/20
              via-secondary/15
              to-tertiary/20
              blur-[80px]"
            />


            {/* Outer ring */}
            <div className="relative
              w-[290px] h-[290px]
              md:w-[400px] md:h-[400px]
              rounded-full
              p-[2px]
              bg-gradient-to-br
              from-primary
              via-secondary
              to-tertiary
              shadow-[0_0_80px_rgba(130,80,255,0.25)]"
            >

              {/* Inner */}
              <div className="w-full h-full rounded-full
                bg-[#09090f]
                p-3"
              >

                <div className="w-full h-full
                  rounded-full
                  overflow-hidden
                  border border-white/10"
                >

                  <img
                    src="/images/thasin.png"
                    alt="Thasin Rahman Developer Portrait"
                    className="w-full h-full object-cover object-center
                      hover:scale-105
                      transition-transform duration-700"
                  />

                </div>

              </div>


              {/* React */}
              <div className="absolute -top-4 -left-5
                flex items-center gap-2
                px-4 py-2.5
                rounded-xl
                border border-white/10
                bg-black/70
                backdrop-blur-xl
                shadow-xl
                animate-bounce"
                style={{ animationDuration: "4s" }}
              >

                <FaReact className="text-cyan-400 text-xl" />

                <span className="text-sm font-semibold text-white">
                  React
                </span>

              </div>


              {/* FastAPI */}
              <div className="absolute top-1/2 -right-7
                flex items-center gap-2
                px-4 py-2.5
                rounded-xl
                border border-white/10
                bg-black/70
                backdrop-blur-xl
                shadow-xl"
              >

                <SiFastapi className="text-teal-400 text-xl" />

                <span className="text-sm font-semibold text-white">
                  FastAPI
                </span>

              </div>


              {/* PostgreSQL */}
              <div className="absolute -bottom-4 left-8
                flex items-center gap-2
                px-4 py-2.5
                rounded-xl
                border border-white/10
                bg-black/70
                backdrop-blur-xl
                shadow-xl
                animate-bounce"
                style={{ animationDuration: "4.5s" }}
              >

                <SiPostgresql className="text-sky-400 text-xl" />

                <span className="text-sm font-semibold text-white">
                  PostgreSQL
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}