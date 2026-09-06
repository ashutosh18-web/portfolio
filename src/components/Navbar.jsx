import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, ExternalLink, Code2, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-2xl py-3 px-5 border-white/10'
            : 'bg-space-950/40 backdrop-blur-sm py-4 px-6 border border-white/5'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <div className="w-full h-full bg-[#080814] rounded-[10px] flex items-center justify-center">
                <span className="font-display font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:scale-110 transition-transform">
                  {profileData.name.charAt(0)}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                {profileData.name}
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80 tracking-wider">
                PORTFOLIO.3D
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-xl border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/[0.06] rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Icons & Resume */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profileData.resumeUrl}
              className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Resume</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-white/10 flex items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <a
                href={profileData.resumeUrl}
                className="text-xs font-semibold px-4 py-2 rounded-lg bg-cyan-500 text-black font-medium"
              >
                Resume PDF
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
