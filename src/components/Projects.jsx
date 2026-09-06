import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Sparkles, Layers, Info, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profileData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Projects & Experiments
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            A showcase of web applications combining clean frontend architecture, real-time data, and interactive 3D WebGL visuals.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {profileData.projects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl border-white/10 flex flex-col justify-between overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-cyan-500/10"
            >
              <div>
                {/* Visual Top Preview Card Banner */}
                <div className="relative h-44 w-full bg-gradient-to-br from-space-800 to-space-950 p-6 flex flex-col justify-between overflow-hidden border-b border-white/10">
                  {/* Decorative Gradient Blob */}
                  <div className={`absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-gradient-to-r ${project.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
                  
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/60 text-cyan-300 border border-white/10 backdrop-blur-md">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Geometric Mock UI Indicator */}
                  <div className="z-10 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white border border-white/10">
                      <Layers className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="font-mono text-xs text-slate-300 tracking-wider">
                      {project.tags[0]} + {project.tags[1]}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 py-2 transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Deep Dive</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo for ${project.title}`}
                    className="p-2 rounded-xl text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA Banner */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-slate-400 mb-3 font-mono">
            Want to see my latest commits and code experiments?
          </p>
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs sm:text-sm transition-all"
          >
            <Github className="w-4 h-4" />
            <span>Visit My GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
