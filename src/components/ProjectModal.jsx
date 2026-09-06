import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Layers, Sparkles, CheckCircle, Code, Cpu } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#0a0c18] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200 overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="mb-6">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 inline-block mb-2">
            {project.category}
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
            {project.title}
          </h3>
        </div>

        {/* Key Metrics / Highlights */}
        {project.stats && (
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 mb-6">
            {Object.entries(project.stats).map(([key, val]) => (
              <div key={key} className="text-center">
                <div className="text-[11px] font-mono uppercase text-slate-400">{key}</div>
                <div className="font-bold text-cyan-300 text-sm sm:text-base">{val}</div>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Description */}
        <div className="space-y-4 mb-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>{project.detailedDescription || project.description}</p>
        </div>

        {/* Tech Tags */}
        <div className="mb-8">
          <div className="text-xs font-mono text-slate-400 mb-2.5">TECHNOLOGIES & TOOLS:</div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl text-xs font-mono bg-white/5 text-slate-200 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
          >
            <span>Launch Live Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
