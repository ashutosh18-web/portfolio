import React from 'react';
import { 
  Code2, Layout, Cpu, Terminal, Atom, Box, Palette, Smartphone, 
  GitBranch, Zap, AppWindow, Search, FileCode, Server, Sparkles, Layers,
  CheckCircle2, Flame
} from 'lucide-react';
import { profileData } from '../data/profileData';

// Map icon names from profileData to Lucide icon components
const iconMap = {
  Code2, Layout, Cpu, Terminal, Atom, Box, Palette, Smartphone,
  GitBranch, Zap, AppWindow, Search, FileCode, Server, Sparkles, Layers
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>TECHNICAL SKILLS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Tools, Languages & Frameworks
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            The modern web stack I use daily, paired with a transparent roadmap of technologies I am actively mastering.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profileData.skills.map((categoryGroup, groupIdx) => {
            const isRoadmap = categoryGroup.category.includes('Learning');

            return (
              <div
                key={groupIdx}
                className={`glass-panel p-6 sm:p-7 rounded-3xl border-white/10 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30 ${
                  isRoadmap ? 'bg-space-900/90 border-purple-500/20' : ''
                }`}
              >
                {/* Header of category */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${isRoadmap ? 'bg-purple-400 animate-pulse' : 'bg-cyan-400'}`} />
                    <h3 className="font-display font-semibold text-lg text-white">
                      {categoryGroup.category}
                    </h3>
                  </div>
                  {isRoadmap && (
                    <span className="flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      <Flame className="w-3 h-3" />
                      Active Focus
                    </span>
                  )}
                </div>

                {/* Skill Items in Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {categoryGroup.items.map((skill, skillIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code2;

                    return (
                      <div
                        key={skillIdx}
                        className="group p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-space-800 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-transform">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                              {skill.name}
                            </div>
                            <div className="text-[11px] font-mono text-slate-400">
                              {skill.level}
                            </div>
                          </div>
                        </div>

                        {skill.focus && (
                          <span className="w-2 h-2 rounded-full bg-cyan-400/80 shadow-sm shadow-cyan-400" title="Core competency" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Tech Tag Cloud */}
        <div className="mt-12 p-6 rounded-3xl glass-pill text-center flex flex-wrap items-center justify-center gap-2.5">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mr-2">Core Toolkit:</span>
          {['JavaScript ES6+', 'React 18', 'Three.js', 'WebGL', 'Tailwind CSS', 'Vite', 'Git', 'HTML5/CSS3', 'Node.js Basics', 'REST APIs', 'Responsive Design'].map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-cyan-300 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
