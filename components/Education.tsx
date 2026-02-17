
import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-50 border-t border-slate-100 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1fr_1.5fr] gap-16">
        <div>
          <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3">
            <GraduationCap className="text-blue-600" size={32} /> Education
          </h2>
          <div className="space-y-12">
            {EDUCATION.map((edu) => (
              <div key={edu.degree} className="relative pl-8 border-l-4 border-blue-600/20">
                <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
                <h3 className="font-extrabold text-slate-900 text-xl leading-tight mb-2">{edu.degree}</h3>
                <p className="text-blue-600 font-bold text-base mb-1">{edu.school}</p>
                <p className="text-slate-500 text-sm font-bold tracking-wider">{edu.period}</p>
                {edu.detail && <p className="text-slate-600 text-sm mt-3 font-medium bg-white p-3 rounded-lg border border-slate-100 shadow-sm">{edu.detail}</p>}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3">
            <Award className="text-blue-600" size={32} /> Licenses & Certifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-200">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="group bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-blue-600 transition-colors">{cert.name}</h4>
                  </div>
                  <p className="text-xs text-slate-500 font-bold mb-4">{cert.issuer}</p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                  <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-widest">
                    {cert.year}
                  </span>
                  <ExternalLink size={14} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-xs mt-6 font-medium italic">
            Scroll to view all {CERTIFICATIONS.length} professional credentials
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
