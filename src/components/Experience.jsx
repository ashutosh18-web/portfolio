import React from 'react';
import { GraduationCap, Calendar, BookOpen, Award, CheckCircle } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Experience() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>JOURNEY & EDUCATION</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Academic & Coding Milestones
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mt-3">
            My educational background and self-directed path into software engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-12">
          {profileData.education.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-space-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-sm shadow-cyan-400" />

              {/* Timeline Card */}
              <div className="glass-panel p-6 sm:p-7 rounded-3xl border-white/10 group-hover:border-cyan-500/30 transition-all">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1">
                  {item.title}
                </h3>
                <div className="text-xs sm:text-sm font-medium text-purple-300 mb-4">
                  {item.institution}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Academic Highlights if relevant */}
                {idx === 0 && (
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-[11px] font-mono text-slate-400 mb-2">
                      RELEVANT UNDERGRADUATE COURSEWORK:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Data Structures & Algorithms', 'Object-Oriented Programming (C++)', 'DBMS & SQL', 'Computer Networks', 'Operating Systems Basics'].map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/5"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
