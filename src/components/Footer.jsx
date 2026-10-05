import {FaGithub,FaLinkedin,} from "react-icons/fa";
import { SiLeetcode,SiCodeforces,} from "react-icons/si";
import {MdArrowUpward,MdMail,} from "react-icons/md";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/skthasin01",
      icon: <FaGithub />,
      style: "hover:border-on-surface/30 hover:text-on-surface",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/thasin-rahman/",
      icon: <FaLinkedin />,
      style: "hover:border-primary/30 hover:text-primary",
    },
    {
      name: "Codeforces",
      href: "https://codeforces.com/profile/sheikhthasinrahman01",
      icon: <SiCodeforces />,
      style: "hover:border-tertiary/30 hover:text-tertiary",
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/thasin_rahman/",
      icon: <SiLeetcode />,
      style: "hover:border-primary/30 hover:text-primary",
    },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-outline/10 bg-surface-container-low px-gutter-mobile py-space-xl md:px-gutter">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-space-lg">

        {/* Top Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          {/* Brand */}
          <div>
            <a
              href="#"
              className="group inline-flex items-center gap-1.5"
            >
              <span className="font-headline-sm text-2xl font-extrabold tracking-tight text-on-surface transition-colors group-hover:text-primary">
                Sheikh Thasin Rahman Shiplu
              </span>

              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(160,120,255,0.8)]" />
            </a>

            <p className="mt-2 max-w-sm font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
              FastAPI & React.js Developer & CS Scholar focused on building
              clean, scalable and meaningful digital experiences.
            </p>
          </div>

          {/* Back To Top */}
          <a
            href="#"
            className="group flex w-fit items-center gap-2 rounded-xl border border-outline/10 bg-surface-container px-4 py-2.5 font-label-code text-label-code text-on-surface-variant transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
          >
            Back to top

            <MdArrowUpward className="text-[17px] transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-outline/10" />

        {/* Navigation */}
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href="#aboutme"
              className="font-label-code text-label-code text-on-surface-variant transition-colors hover:text-primary"
            >
              About
            </a>

            <a
              href="#skills"
              className="font-label-code text-label-code text-on-surface-variant transition-colors hover:text-primary"
            >
              Skills
            </a>

            <a
              href="#education"
              className="font-label-code text-label-code text-on-surface-variant transition-colors hover:text-primary"
            >
              Education
            </a>

            <a
              href="#projects"
              className="font-label-code text-label-code text-on-surface-variant transition-colors hover:text-primary"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="font-label-code text-label-code text-on-surface-variant transition-colors hover:text-primary"
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="font-label-code text-label-code text-on-surface-variant transition-colors hover:text-primary"
            >
              resume
            </a>
          </nav>

          {/* Email CTA */}
          <a
            href="mailto:sheikhthasinrahman01@gmail.com"
            className="flex items-center gap-2 font-label-code text-label-code text-on-surface-variant transition-colors hover:text-primary"
          >
            <MdMail className="text-[17px]" />
            <span>Let's connect</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex min-h-[42px] items-center gap-2 rounded-xl border border-outline/10 bg-surface-container px-3.5 py-2 text-on-surface-variant transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-high ${social.style}`}
            >
              <span className="text-[16px] transition-transform duration-300 group-hover:scale-110">
                {social.icon}
              </span>

              <span className="font-label-code text-label-code">
                {social.name}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-2 border-t border-outline/10 pt-space-md md:flex-row md:items-center md:justify-between">
          <p className="font-body-sm text-body-sm text-outline">
            © 2026 Thasin Rahman. All rights reserved.
          </p>

          <p className="font-label-code text-label-code text-outline">
            Designed & Built with React + Tailwind css
          </p>
        </div>
      </div>
    </footer>
  );
}

