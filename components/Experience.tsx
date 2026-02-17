
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, Star, Target, ShieldCheck } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Work History & Impact</h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
        </div>
        
        <div className="space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="grid md:grid-cols-[250px_1fr] gap-8 relative group">
              <div className="hidden md:block absolute left-[242px] top-4 w-4 h-4 rounded-full bg-blue-600 border-4 border-white z-10 shadow-sm group-hover:scale-125 transition-transform" />
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-lg">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
                <p className="text-slate-500 font-medium">{exp.company}</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{exp.location}</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                </div>
                
                <div className="space-y-8">
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                        <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                      <h4 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Star size={16} className="fill-blue-600 text-blue-600" /> Key Achievements & Business Impact
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.businessGoals && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
                        <Target size={16} className="text-blue-600" /> Business Delivery Goals
                      </h4>
                      <div className="grid md:grid-cols-1 gap-3">
                        {exp.businessGoals.map((goal, i) => (
                          <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                              {goal.label}
                            </span>
                            <div>
                              <p className="text-sm font-bold text-slate-900">{goal.title}</p>
                              <p className="text-xs text-slate-600 leading-relaxed mt-1">{goal.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.foundationalGoals && (
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
                        <ShieldCheck size={16} className="text-green-600" /> Foundational Goals
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {exp.foundationalGoals.map((goal, i) => (
                          <div key={i} className="p-4 rounded-lg bg-green-50/30 border border-green-100/50">
                            <p className="text-xs font-bold text-green-800 mb-1">{goal.title}</p>
                            <p className="text-[10px] text-slate-600 leading-tight">{goal.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-8">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium border border-slate-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
