import React from 'react';
import {
  FileText,
  ArrowRight,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  Database,
  Cpu,
  Shield
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Software &amp; Data Engineering Opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4">
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Professional Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-5 leading-snug">
              Data Engineer &amp; Python Backend Developer
            </h2>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Computer Science graduate (<span className="font-semibold text-indigo-600 dark:text-indigo-400">CGPA 9.29</span>) with hands-on experience in building scalable <strong className="text-slate-800 dark:text-slate-100 font-semibold">ETL/ELT data pipelines</strong>, a SQL data warehouse with <strong className="text-slate-800 dark:text-slate-100 font-semibold">SCD Type 2</strong>, production <strong className="text-slate-800 dark:text-slate-100 font-semibold">FastAPI microservices</strong>, and intelligent <strong className="text-slate-800 dark:text-slate-100 font-semibold">multimodal AI</strong> &amp; honeypot intrusion detection systems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md hover:shadow-indigo-500/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm border border-slate-300 dark:border-slate-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>View &amp; Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 font-medium text-sm transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Meta & Socials */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github/{PERSONAL_INFO.githubHandle}</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>linkedin/{PERSONAL_INFO.name}</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Card Container with Glassmorphism */}
              <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white/90 to-slate-50/90 dark:from-slate-900/90 dark:to-slate-950/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xl overflow-hidden">
                
                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                {/* Avatar Badge */}
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    {/* Glowing ring */}
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full blur-md opacity-70 animate-pulse-slow" />
                    
                    {/* Monogram Avatar */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-indigo-600 via-purple-700 to-slate-900 flex flex-col items-center justify-center text-white border-4 border-white dark:border-slate-900 shadow-xl">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-wider">
                        {PERSONAL_INFO.initials}
                      </span>
                      <span className="text-[10px] tracking-widest uppercase font-mono text-cyan-300 -mt-1">
                        Engineer
                      </span>
                    </div>

                    {/* Verified Star Badge */}
                    <div className="absolute bottom-1 right-1 bg-white dark:bg-slate-900 p-1.5 rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
                      <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">
                    CMR Institute of Technology (2022–2026)
                  </p>

                  {/* Terminal Snippet Box */}
                  <div className="w-full bg-slate-950 rounded-xl p-3.5 text-left border border-slate-800 font-mono text-xs text-slate-300 shadow-inner mb-5">
                    <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-slate-800 text-slate-500">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="text-[10px] ml-1">keerthi@stack:~</span>
                    </div>
                    <div className="text-emerald-400">$ whoami</div>
                    <div className="text-slate-400 pl-2">
                      &gt; Data Engineer &amp; Python Dev
                    </div>
                    <div className="text-emerald-400 mt-1">$ current_status</div>
                    <div className="text-slate-400 pl-2">
                      &gt; Intern @ V4C | Ex-AeroAegis | SuprMentr
                    </div>
                    <div className="text-emerald-400 mt-1">$ tech_stack</div>
                    <div className="text-indigo-300 pl-2">
                      ["FastAPI", "SCD-Type2", "Airflow", "Redshift", "LangGraph"]
                    </div>
                  </div>

                  {/* 4 Feature Tags */}
                  <div className="grid grid-cols-2 gap-2 w-full text-left">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40">
                      <Database className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                      <div className="text-[11px] leading-tight">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block">Star Schema</span>
                        <span className="text-slate-500 dark:text-slate-400 text-[10px]">SCD Type 2 DW</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-cyan-50/70 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/40">
                      <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <div className="text-[11px] leading-tight">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block">FastAPI &amp; REST</span>
                        <span className="text-slate-500 dark:text-slate-400 text-[10px]">10+ Integrations</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40">
                      <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                      <div className="text-[11px] leading-tight">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block">Multimodal AI</span>
                        <span className="text-slate-500 dark:text-slate-400 text-[10px]">LangGraph &amp; Vision</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40">
                      <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <div className="text-[11px] leading-tight">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block">Cyber Defense</span>
                        <span className="text-slate-500 dark:text-slate-400 text-[10px]">NEXUS Honeypot</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform duration-200">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
