import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award
} from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education &amp; Qualifications
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            A track record of academic excellence, university top rankings, and rigorous computer science foundations.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDUCATION_LIST.map((edu) => (
            <div
              key={edu.id}
              className="flex flex-col justify-between rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Year & Location */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4 pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Score Callout */}
                <div className="mb-4 inline-flex items-baseline gap-2 px-3.5 py-1.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60">
                  <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
                    {edu.score}
                  </span>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                    {edu.scoreLabel}
                  </span>
                </div>

                {/* Institution & Degree */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {edu.institution}
                </h3>
                <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  {edu.degree}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                  {edu.field}
                </p>

                {/* Honors */}
                {edu.honors && edu.honors.length > 0 && (
                  <div className="space-y-2 pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Key Honors &amp; Distinction
                    </span>
                    {edu.honors.map((honor, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 leading-snug"
                      >
                        <Award className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{honor}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
