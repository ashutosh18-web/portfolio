import React from 'react';
import { ArrowUp, Heart, Sparkles, Terminal, Code2 } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#040409] py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-display font-bold text-white text-base">
                {profileData.name}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-mono text-cyan-400">
                PORTFOLIO 3D
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              © {currentYear} {profileData.name}. All rights reserved. Open-source under MIT.
            </p>
          </div>

          {/* Center Tech Stack Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-slate-300">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>React</span>
            <span className="text-slate-600">•</span>
            <span>Three.js</span>
            <span className="text-slate-600">•</span>
            <span>Tailwind CSS</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-cyan-500/30 text-xs font-medium transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
          </button>

        </div>
      </div>
    </footer>
  );
}
