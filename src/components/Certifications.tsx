import React, { useState } from 'react';
import {
  Award,
  Flame,
  Cpu,
  Wifi,
  Code,
  CheckCircle2,
  Trophy,
  Medal,
  GraduationCap,
  Sparkles,
  Star,
  Heart
} from 'lucide-react';
import { CERTIFICATION_CATEGORIES, ACHIEVEMENTS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'certifications' | 'achievements'>('certifications');

  const getProviderIcon = (name: string) => {
    switch (name) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-500" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-emerald-500" />;
      case 'Code':
        return <Code className="w-5 h-5 text-indigo-500" />;
      case 'Award':
      default:
        return <Award className="w-5 h-5 text-purple-500" />;
    }
  };

  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'Medal':
        return <Medal className="w-5 h-5 text-indigo-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-blue-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-500" />;
      case 'Star':
        return <Star className="w-5 h-5 text-pink-500" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-rose-500" />;
      default:
        return <Award className="w-5 h-5 text-amber-500" />;
    }
  };

  const totalCertsCount = CERTIFICATION_CATEGORIES.reduce(
    (acc, cat) => acc + cat.certifications.length,
    0
  );

  return (
    <section id="certifications" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials &amp; Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications &amp; Achievements
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Validated technical certifications from Databricks, IBM, Cisco, and industry leaders alongside collegiate honors.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('certifications')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'certifications'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Certifications ({totalCertsCount})</span>
          </button>

          <button
            onClick={() => setActiveTab('achievements')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'achievements'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Achievements &amp; Activities ({ACHIEVEMENTS.length})</span>
          </button>
        </div>

        {/* Tab 1: Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATION_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                        {getProviderIcon(cat.iconName)}
                      </div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        {cat.provider}
                      </h3>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                      {cat.certifications.length} Creds
                    </span>
                  </div>

                  {/* Certifications List */}
                  <ul className="space-y-2.5">
                    {cat.certifications.map((cert, cIdx) => (
                      <li
                        key={cIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-snug"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Achievements & Activities */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.id}
                className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                      {getAchievementIcon(ach.icon)}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {ach.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">
                    {ach.title}
                  </h3>
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    {ach.organization}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
