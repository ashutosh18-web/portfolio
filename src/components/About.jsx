import React from 'react';
import { User, Sparkles, CheckCircle2, GraduationCap, Laptop, Compass, Heart } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Curious Learner & Web Explorer
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            The story behind my journey from writing my first JavaScript function to rendering interactive 3D WebGL worlds.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Panel (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-white">
                    2nd Year Computer Science Journey
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">B.Tech / B.E. CSE Undergrad</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I'm currently in my 2nd year of college, where I've been actively building practical projects to bridge classroom theory with modern software development.
                </p>
                <p>
                  While many students stick solely to textbook assignments, I found my excitement in creating tangible, responsive web interfaces. Starting with JavaScript DOM manipulation and modern ES6+, I quickly advanced into the React ecosystem and was fascinated by how WebGL and Three.js can turn a flat website into an immersive 3D digital canvas.
                </p>
                <p>
                  My goal is to secure a software engineering or frontend development internship where I can contribute to high-impact user experiences, write clean code, and learn from experienced engineers.
                </p>
              </div>
            </div>

            {/* Quick bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-white/10">
              {profileData.about.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Pillars & Philosophy (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* College & Education Summary Card */}
            <div className="glass-panel p-6 rounded-3xl border-white/10 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-base text-white">Academic Foundation</h4>
                  <span className="text-xs text-slate-400">Core Engineering Principles</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Complementing my frontend exploration with rigorous coursework in Data Structures & Algorithms, Object-Oriented Programming (C++/Java), and Database Systems.
              </p>
            </div>

            {/* Creative Drive Card */}
            <div className="glass-panel p-6 rounded-3xl border-white/10 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-base text-white">Creative Coding & 3D</h4>
                  <span className="text-xs text-slate-400">WebGL & Mathematics in Action</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                I believe web experiences should be memorable. Learning vector math, camera projection, and particle shaders gives me the tools to build interactive moments that stand out.
              </p>
            </div>

            {/* Growth Mindset Banner */}
            <div className="p-5 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-300 shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">Mindset</div>
                <div className="text-sm font-semibold text-white">Eager to absorb, iterate, and build daily.</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
