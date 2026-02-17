
import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            A comprehensive overview of specialized competencies in the SAP ecosystem and enterprise resource planning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((category) => (
            <div key={category.category} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                  {category.category.charAt(0)}
                </span>
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
