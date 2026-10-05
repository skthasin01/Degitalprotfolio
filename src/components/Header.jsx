import { useState } from 'react';
import { MdMail, MdHome, MdPerson, MdPsychology, MdLayers, MdDownload } from 'react-icons/md';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.12)]">
      <div className="h-16 px-gutter-mobile flex items-center justify-between relative">
        <a className="flex items-center gap-2" data-path="overview" href="#">
          <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight flex items-center">
            <span className="text-5xl font-bold">TR</span>
            <span className="inline-block w-2 h-2 ml-1 rounded-full bg-primary-container shadow-[0_0_8px_#a078ff]"></span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-space-md font-label-code text-label-code text-on-surface-variant">
          <a className="hover:text-primary transition-colors py-1 px-2 rounded hover:bg-surface-container" href="#">Home</a>
          <a className="hover:text-primary transition-colors py-1 px-2 rounded hover:bg-surface-container" href="#aboutme">About Me</a>
          <a className="hover:text-primary transition-colors py-1 px-2 rounded hover:bg-surface-container" href="#skills">Skills</a>
          <a className="hover:text-primary transition-colors py-1 px-2 rounded hover:bg-surface-container" href="#projects">Projects</a>
          <a className="hover:text-primary transition-colors py-1 px-2 rounded hover:bg-surface-container" href="/resume.pdf" target="_blank">Resume</a>
        </nav>

        <div className="flex items-center gap-space-sm">
          <a className="hidden md:flex items-center justify-center h-10 px-3.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-headline-sm text-label-code gap-1 min-w-[44px] transition-colors" href="#contact">
            <MdMail className="text-[18px]" />
            <span>Contact Me</span>
          </a>

          <div className="relative">
            <button
              aria-expanded={menuOpen}
              aria-haspopup="true"
              aria-label="Toggle Navigation Menu"
              className="flex items-center min-w-[44px] min-h-[44px] justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
            >
              <img alt="Thasin Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-outline/30 hover:ring-primary transition-colors" src="/images/thasin.png" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl bg-surface-container-high/95 backdrop-blur-xl border border-outline-variant shadow-xl py-2 z-50 transition-all" id="mobile-avatar-menu">
                <div className="px-4 py-2 border-b border-outline-variant">
                  <p className="font-headline-sm text-body-sm text-on-surface font-semibold">Thasin Rahman</p>
                  <p className="font-label-caps text-label-caps text-outline uppercase tracking-wider">FastAPI & React.js Developer</p>
                </div>
                <div className="flex flex-col py-1 font-body-sm text-body-sm">
                  <a className="flex items-center gap-2.5 px-4 py-2.5 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" href="#" onClick={() => setMenuOpen(false)}>
                    <MdHome className="text-[18px]" />
                    <span>Home</span>
                  </a>
                  <a className="flex items-center gap-2.5 px-4 py-2.5 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" href="#aboutme" onClick={() => setMenuOpen(false)}>
                    <MdPerson className="text-[18px]" />
                    <span>About Me</span>
                  </a>
                  <a className="flex items-center gap-2.5 px-4 py-2.5 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" href="#skills" onClick={() => setMenuOpen(false)}>
                    <MdPsychology className="text-[18px]" />
                    <span>Skills</span>
                  </a>
                  <a className="flex items-center gap-2.5 px-4 py-2.5 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" href="#projects" onClick={() => setMenuOpen(false)}>
                    <MdLayers className="text-[18px]" />
                    <span>Projects</span>
                  </a>
                  <a className="flex items-center gap-2.5 px-4 py-2.5 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" href="#contact" onClick={() => setMenuOpen(false)}>
                    <MdMail className="text-[18px]" />
                    <span>Contact</span>
                  </a>
                  <a
                    className="flex items-center gap-2.5 px-4 py-2.5 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                    href="/resume.pdf"
                    download
                    onClick={() => setMenuOpen(false)}
                  >
                    <MdDownload className="text-[18px]" />
                    <span>Resume Download</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
