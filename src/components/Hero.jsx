import React from 'react';
import { ArrowRight, Sparkles, Terminal, Layers, Send, ChevronDown } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';
import { profileData } from '../data/profileData';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text Content (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-cyan-300">
                {profileData.status}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-white">
              Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">3D</span> & Modern Web Experiences
            </h1>

            {/* Subtitle / Bio summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed">
              Hello, I'm <strong className="text-white font-semibold">{profileData.name}</strong>, a 2nd-year computer science undergrad learning and building immersive frontend web applications with <span className="text-cyan-300">React</span>, <span className="text-blue-300">JavaScript</span>, and <span className="text-purple-300">Three.js WebGL</span>.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-panel text-slate-200 hover:text-white font-semibold text-sm hover:border-cyan-500/40 hover:bg-white/[0.08] transition-all"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Quick Metrics / Student Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-6 border-t border-white/10">
              {profileData.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs text-slate-400 font-mono mb-1">{stat.label}</div>
                  <div className="font-display font-semibold text-sm sm:text-base text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Three.js 3D WebGL Canvas (5 cols on desktop) */}
          <div className="lg:col-span-5 w-full flex items-center justify-center relative">
            <div className="w-full max-w-lg aspect-square rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent p-1 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-radial-gradient from-cyan-500/10 to-transparent pointer-events-none" />
              
              {/* Mounted 3D WebGL Scene */}
              <ThreeCanvas />

              {/* Corner Tech Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 text-[10px] font-mono text-slate-300 backdrop-blur-md">
                <Terminal className="w-3 h-3 text-cyan-400" />
                <span>WebGL 2.0</span>
              </div>
            </div>
          </div>

        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors group"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-cyan-400">
              Scroll Down
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
