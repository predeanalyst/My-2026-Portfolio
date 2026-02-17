
import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle2, Award, Zap, Briefcase, BrainCircuit, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return <BrainCircuit size={20} />;
    if (category.includes('SAP')) return <Briefcase size={20} />;
    if (category.includes('Stack')) return <Zap size={20} />;
    if (category.includes('Non-Technical')) return <Users size={20} />;
    return <CheckCircle2 size={20} />;
  };

  // Separate technical and non-technical for clearer visual hierarchy
  const technicalSkills = SKILLS.filter(s => !s.category.includes('Non-Technical'));
  const nonTechnicalSkills = SKILLS.filter(s => s.category.includes('Non-Technical'));

  return (
    <section id="skills" className="py-24 bg-white border-y border-slate-100 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">
            Core Competencies
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Technical Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Specialized technical skills bridging the gap between enterprise finance systems and cutting-edge artificial intelligence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {technicalSkills.map((category) => (
            <div key={category.category} className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-500 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                {getCategoryIcon(category.category)}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.items.map(item => (
                  <li key={item} className="flex items-start gap-3 text-slate-600 text-sm font-bold">
                    <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Non-Technical Expertise Section */}
        <div className="pt-16 border-t border-slate-100">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white">
              <Users size={24} />
            </div>
            <h3 className="text-3xl font-black text-slate-900">Non-Technical Expertise</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonTechnicalSkills.map((category) => (
              category.items.map(item => (
                <div key={item} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all group">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Award size={18} />
                  </div>
                  <span className="font-bold text-slate-800">{item}</span>
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
