
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Database, Code, Globe, Droplets, BrainCircuit, Zap, BarChart3, LineChart } from 'lucide-react';

const Projects: React.FC = () => {
  const getIcon = (title: string, category?: string) => {
    if (category === 'AI & ML in Oil & Gas') return <BrainCircuit size={24} className="text-blue-400" />;
    if (category === 'Oil & Gas') return <Droplets size={24} className="text-orange-500" />;
    if (category === 'Data Science Portfolio') return <LineChart size={24} className="text-green-500" />;
    if (title.includes('SQL')) return <Database size={24} />;
    if (title.includes('Web')) return <Globe size={24} />;
    return <Code size={24} />;
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* STRATEGIC AI/ML SECTION */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-blue-100">
              <Zap size={24} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">AI & ML Focus</h2>
              <p className="text-slate-500 font-medium">Strategic innovations for the Oil & Gas industry</p>
            </div>
          </div>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {PROJECTS.filter(p => p.category === 'AI & ML in Oil & Gas').map((project) => (
            <div key={project.title} className="group bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <BrainCircuit size={120} />
              </div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                  {getIcon(project.title, project.category)}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/20 rounded">
                  Predictive Engine
                </span>
                <span className="px-3 py-1 bg-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded">
                  Python / PyTorch
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* DATA SCIENCE PORTFOLIO SECTION */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-black text-slate-900">Data Science & Analytics Portfolio</h2>
            <div className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-full border border-green-200">
              Portfolio
            </div>
          </div>
          <p className="text-slate-600 mb-8 max-w-2xl">A collection of research projects focusing on statistical analysis, machine learning foundations, and data-driven storytelling.</p>
          <div className="w-20 h-1.5 bg-green-500 rounded-full mb-12" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {PROJECTS.filter(p => p.category === 'Data Science Portfolio').map((project) => (
            <div key={project.title} className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-green-400/50 hover:bg-white transition-all shadow-sm hover:shadow-xl">
              <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-5 border border-slate-100 group-hover:scale-110 transition-transform">
                {getIcon(project.title, project.category)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Analysis</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">•</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Insights</span>
              </div>
            </div>
          ))}
        </div>

        {/* CORE OIL & GAS SECTION */}
        <div className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Core Oil & Gas / SAP Projects</h2>
          <div className="w-20 h-1.5 bg-orange-500 rounded-full mb-8" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.filter(p => p.category === 'Oil & Gas').map((project) => (
            <div key={project.title} className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-orange-500/50 transition-all hover:shadow-lg flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-50 transition-colors">
                {getIcon(project.title, project.category)}
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a href={project.link} className="text-slate-400 hover:text-slate-600"><ExternalLink size={18} /></a>
                  )}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2">
                   <BarChart3 size={14} className="text-slate-400" />
                   <span className="text-[11px] font-bold text-slate-500 uppercase">Enterprise Automation</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
