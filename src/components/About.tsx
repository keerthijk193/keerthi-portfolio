import React from 'react';
import {
  Database,
  Server,
  Bot,
  ShieldCheck,
  Languages,
  BookOpen,
  Award,
  Compass,
  CheckCircle,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO, CORE_CS_CONCEPTS } from '../data/portfolioData';

export const About: React.FC = () => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Database':
        return <Database className="w-6 h-6 text-indigo-500" />;
      case 'Server':
        return <Server className="w-6 h-6 text-cyan-500" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-purple-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-500" />;
      default:
        return <Database className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            A look into my engineering principles, technical specializations, and career drive.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Engineering Journey &amp; Career Objective</span>
            </h3>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                I am a Computer Science graduate from <strong className="text-slate-900 dark:text-white">CMR Institute of Technology, Bengaluru</strong> with an academic record of <span className="font-semibold text-indigo-600 dark:text-indigo-400">9.29 CGPA</span>. My engineering mindset is anchored on writing clean, deterministic, and highly reliable code that converts complex raw business inputs into organized, actionable systems.
              </p>
              <p>
                Through four internships spanning <strong className="text-slate-800 dark:text-slate-200">Data Engineering</strong> (V4C), <strong className="text-slate-800 dark:text-slate-200">Python Backend Systems</strong> (AeroAegis), <strong className="text-slate-800 dark:text-slate-200">Cybersecurity</strong> (SuprMentr / NASSCOM), and <strong className="text-slate-800 dark:text-slate-200">Machine Learning</strong> (Internpe), I have gained hands-on experience in building systems that handle real traffic, complex data transformations, and mission-critical reliability.
              </p>
              <p>
                Whether orchestrating <strong className="text-slate-900 dark:text-white">Apache Airflow</strong> DAGs, implementing atomic <strong className="text-slate-900 dark:text-white">SCD Type 2</strong> warehousing across 100,000 records, configuring multi-platform REST connectors for enterprise platforms (Jira, Salesforce, Shopify, AWS S3), or training multimodal AI agents with <strong className="text-slate-900 dark:text-white">LangGraph</strong> and <strong className="text-slate-900 dark:text-white">Gemini Vision API</strong>, I focus on end-to-end quality and robust verification.
              </p>
            </div>

            {/* Quick Strengths Badges */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Key Engineering Tenets
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Deterministic ETL pipelines & Star Schema design",
                  "Atomic dual-database transactions (OLTP + OLAP)",
                  "Production API connectors with rigorous Postman tests",
                  "Comprehensive test suites (Pytest, Mongomock, Smoke tests)",
                  "Defensive security-first mindset & threat monitoring",
                  "Clear, articulate technical communication & team spirit"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Spoken Languages & Core CS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Spoken Languages Card */}
            <div className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Languages className="w-5 h-5 text-indigo-500" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Languages Spoken
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Multilingual communicator with fluent written and verbal proficiency:
              </p>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.spokenLanguages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-50/80 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Core CS Foundations Card */}
            <div className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-purple-500" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Core Computer Science Foundations
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Rigorous fundamentals demonstrated through coursework and university exams:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CORE_CS_CONCEPTS.map((concept, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span>{concept}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Accolade Highlight */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  Centum Achiever (100/100 Full Marks)
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                  CAED External University Examination, VTU 2023 &bull; 1st Rank Subject Topper in Research Methodology &amp; IPR
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERSONAL_INFO.corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 shadow-sm group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getPillarIcon(pillar.icon)}
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
