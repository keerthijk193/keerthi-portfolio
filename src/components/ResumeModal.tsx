import React from 'react';
import {
  X,
  Printer
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EXPERIENCES,
  PROJECTS,
  EDUCATION_LIST,
  CERTIFICATION_CATEGORIES
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      {/* Container */}
      <div className="relative w-full max-w-4xl max-h-[94vh] flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Toolbar (hidden when printing) */}
        <div className="print:hidden flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 ml-2">
              Keerthi_J_K_Resume.pdf (Verified Document)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 font-sans print:p-0 print:text-black print:bg-white text-xs sm:text-sm">
          
          {/* Header */}
          <div className="text-center pb-5 mb-5 border-b border-slate-300 dark:border-slate-700 print:border-black">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white print:text-black uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-xs text-slate-600 dark:text-slate-400 print:text-slate-700 mt-1">
              Bengaluru, Karnataka, India
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 print:text-slate-700 mt-2">
              <span>{PERSONAL_INFO.phoneDisplay}</span>
              <span>&bull;</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span>&bull;</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/{PERSONAL_INFO.linkedinHandle}
              </a>
              <span>&bull;</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/{PERSONAL_INFO.githubHandle}
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 print:text-black border-b border-indigo-200 dark:border-slate-700 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-xs text-slate-700 dark:text-slate-300 print:text-black leading-relaxed">
              Computer Science graduate (CGPA 9.29) with hands-on experience in data engineering, Python backend development, AI/ML and cybersecurity. Built data pipelines and API integrations, a SQL data warehouse with SCD Type 2, and multimodal AI and intrusion-detection systems. Seeking an entry-level technology role to apply Python, SQL, and problem-solving skills to real-world products.
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 print:text-black border-b border-indigo-200 dark:border-slate-700 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white print:text-black">
                      {edu.institution}
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 print:text-black italic">
                      {edu.degree} in {edu.field} ({edu.scoreLabel}: {edu.score})
                    </div>
                  </div>
                  <div className="text-right text-[11px] text-slate-600 dark:text-slate-400 print:text-black shrink-0">
                    <div>{edu.period}</div>
                    <div>{edu.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 print:text-black border-b border-indigo-200 dark:border-slate-700 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 print:text-black">
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">Languages:</strong> Python, SQL, Java (Basic), JavaScript (Node.js), HTML/CSS
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">Data Engineering:</strong> ETL/ELT, Data Pipelines, Data Ingestion, Data Validation, Data Warehousing, Star Schema, SCD Type 2, Apache Airflow, Kafka, Grafana, Databricks (Fundamentals), PySpark (Introductory)
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">Databases:</strong> MySQL, SQLite, MongoDB, Amazon Redshift (joins, CTEs, window functions, stored procedures)
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">AI/ML:</strong> Scikit-learn, XGBoost, LangChain, LangGraph, AI Agents, RAG, Vector Databases, Semantic Search, Prompt Engineering, Gemini Vision API, n8n
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">Backend &amp; APIs:</strong> FastAPI, Express.js, REST APIs, JSON, Postman, API Testing, Streamlit, Socket.io
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">Analytics:</strong> Pandas, Microsoft Excel, Power BI, Plotly, Matplotlib, Seaborn
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">Testing &amp; DevOps:</strong> Pytest, Docker, Git/GitHub, Azure DevOps, CI/CD, Linux
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">Security:</strong> Nmap, Wireshark, Burp Suite, Kali Linux
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">Core CS:</strong> DSA, OOPs, DBMS, Operating Systems, Computer Networks, SDLC
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">Professional:</strong> Written and Verbal Communication, Teamwork, Time Management
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 print:text-black border-b border-indigo-200 dark:border-slate-700 pb-1 mb-2">
              Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline font-bold text-slate-900 dark:text-white print:text-black">
                    <span>
                      {exp.company}
                    </span>
                    <span className="text-[11px] font-normal text-slate-600 dark:text-slate-400 print:text-black">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs italic text-slate-700 dark:text-slate-300 print:text-black mb-1">
                    <span>{exp.role}</span>
                    <span className="text-[11px] not-italic text-slate-500 dark:text-slate-400 print:text-black">
                      {exp.location}
                    </span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 print:text-black border-b border-indigo-200 dark:border-slate-700 pb-1 mb-2">
              Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((p) => (
                <div key={p.id}>
                  <div className="flex justify-between items-baseline">
                    <div className="font-bold text-slate-900 dark:text-white print:text-black">
                      {p.title} <span className="font-normal italic text-[11px] text-slate-600 dark:text-slate-400 print:text-black">| {p.technologies.slice(0, 5).join(', ')}</span>
                    </div>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400 print:text-black shrink-0 ml-2">
                      {p.year}
                    </span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-black mt-1">
                    {p.keyContributions.map((c, cIdx) => (
                      <li key={cIdx}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 print:text-black border-b border-indigo-200 dark:border-slate-700 pb-1 mb-2">
              Certifications
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 print:text-black">
              {CERTIFICATION_CATEGORIES.map((cat, idx) => (
                <div key={idx}>
                  <strong className="text-slate-900 dark:text-white print:text-black">{cat.provider}:</strong> {cat.certifications.join(', ')}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Activities */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 print:text-black border-b border-indigo-200 dark:border-slate-700 pb-1 mb-2">
              Achievements &amp; Activities
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-black">
              <li>Centum Achiever (full marks, CAED external exam, VTU, 2023); 1st rank subject topper in Research Methodology &amp; IPR (5th semester CSE); 3rd rank in school, Class 10 CBSE.</li>
              <li>1st and 2nd place in dance competition at AURA ’23 and ’24 (Inter-Departmental Fest).</li>
              <li>Participated in Hackathon on Assistive Technology 2024, CypherQuest 2025 (24-hour) and Gen AI Hackfest 2025.</li>
              <li>Member of NSS (community service and environmental awareness), Pregos (college dance club) and CSE Fashion Team.</li>
            </ul>
          </div>

          {/* Personal Details */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 print:text-black border-b border-indigo-200 dark:border-slate-700 pb-1 mb-2">
              Personal Details
            </h2>
            <div className="text-xs text-slate-700 dark:text-slate-300 print:text-black">
              <span className="font-semibold">Languages:</span> English, Hindi, Kannada, Telugu &bull; <span className="font-semibold">Nationality:</span> Indian &bull; <span className="font-semibold">Location:</span> Bengaluru, Karnataka
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
