import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Github, Linkedin, MessageSquare, MapPin, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus({ type: 'error', text: 'Please fill in all fields before sending.' });
      return;
    }

    // Open default email client with prefilled info
    const subject = encodeURIComponent(`Portfolio Message from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.open(`mailto:${profileData.email}?subject=${subject}&body=${body}`);

    setStatus({
      type: 'success',
      text: 'Opening your email client! You can also copy my direct email directly below.',
    });
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Whether you have an internship opportunity, a project collaboration, or just want to chat about 3D web graphics, my inbox is always open.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Info & Quick Copy (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Quick Email Copy Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-base text-white">Direct Email</h4>
                  <span className="text-xs text-slate-400">Quick response within 24 hours</span>
                </div>
              </div>

              {/* Copy Email Box */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/10 mt-4">
                <span className="font-mono text-xs sm:text-sm text-cyan-300 truncate mr-2">
                  {profileData.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-cyan-500 hover:text-black text-white text-xs font-medium transition-all shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border-white/10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">LOCATION</div>
                    <div className="text-sm font-medium text-white">{profileData.location} (Open to Remote)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">AVAILABILITY</div>
                    <div className="text-sm font-medium text-white">Summer Internships & Frontend Roles</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 flex items-center justify-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 flex items-center justify-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border-white/10 relative overflow-hidden">
            <h3 className="font-display font-semibold text-xl text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Fill out the details below to reach out directly to my mailbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Smith"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  placeholder="alex@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  YOUR MESSAGE
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your team, internship role, or project..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition-all resize-none"
                  required
                />
              </div>

              {status && (
                <div
                  className={`p-3 rounded-xl text-xs ${
                    status.type === 'error'
                      ? 'bg-red-500/10 text-red-300 border border-red-500/20'
                      : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                  }`}
                >
                  {status.text}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
