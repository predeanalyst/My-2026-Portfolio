
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Database, Code, Globe, Droplets, BrainCircuit, Zap, BarChart3, LineChart, ArrowUpRight, FileSpreadsheet, Layers, Settings, Users, ClipboardCheck } from 'lucide-react';

const Projects: React.FC = () => {
  const getIcon = (title: string, category?: string) => {
    if (category === 'AI & ML in Oil & Gas') return <BrainCircuit size={24} className="text-blue-400" />;
    
    // Specific tool based icons for Data Science Portfolio
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('power bi')) return <BarChart3 size={24} className="text-yellow-500" />;
    if (lowerTitle.includes('excel') || lowerTitle.includes('vba') || lowerTitle.includes('reporting')) return <FileSpreadsheet size={24} className="text-green-600" />;
    if (lowerTitle.includes('sql') || lowerTitle.includes('etl') || lowerTitle.includes('tracking')) return <Database size={24} className="text-blue-500" />;
    if (lowerTitle.includes('alteryx')) return <Layers size={24} className="text-indigo-500" />;
    if (lowerTitle.includes('logon') || lowerTitle.includes('config')) return <Settings size={24} className="text-slate-500" />;
    if (lowerTitle.includes('engagement') || lowerTitle.includes('role')) return <Users size={24} className="text-purple-500" />;
    if (lowerTitle.includes('compliance') || lowerTitle.includes('validation')) return <ClipboardCheck size={24} className="text-red-500" />;

    if (category === 'Oil & Gas') return <Droplets size={24} className="text-orange-500" />;
    if (category === 'Data Science Portfolio') return <LineChart size={24} className="text-green-500" />;
    if (lowerTitle.includes('web')) return <Globe size={24} />;
    return <Code size={24} />;
  };

  return (
    <section id="projects" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* MAIN HEADING */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">
            Innovation Pipeline
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">AI & ML Focus</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Pioneering predictive maintenance, reservoir analytics, and intelligent automation solutions for the global upstream energy sector.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {PROJECTS.filter(p => p.category === 'AI & ML in Oil & Gas').map((project) => (
            <div key={project.title} className="group bg-slate-900 rounded-3xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <BrainCircuit size={80} />
              </div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700">
                  {getIcon(project.title, project.category)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-col gap-4 mt-auto">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[9px] font-black uppercase tracking-widest border border-blue-500/20 rounded">
                    Deep Learning
                  </span>
                  <span className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[9px] font-black uppercase tracking-widest rounded">
                    Python
                  </span>
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 font-black uppercase tracking-widest text-[10px] hover:text-white transition-colors group/link pt-2 border-t border-slate-800"
                  >
                    View Project <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                )}
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
            <div key={project.title} className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-green-400/50 hover:bg-white transition-all shadow-sm hover:shadow-xl flex flex-col">
              <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-5 border border-slate-100 group-hover:scale-110 transition-transform">
                {getIcon(project.title, project.category)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-col gap-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Analysis</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">•</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Insights</span>
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 font-black uppercase tracking-widest text-[10px] hover:text-green-800 transition-colors group/link"
                  >
                    View Project <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CORE OIL & GAS SECTION */}
        <div className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Core Oil & Gas / SAP Projects</h2>
          <div className="w-20 h-1.5 bg-orange-500 rounded-full mb-8" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.filter(p => p.category === 'Oil & Gas').map((project) => (
            <div key={project.title} className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-orange-500/50 transition-all hover:shadow-lg flex flex-col">
              <div className="flex gap-6 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-50 transition-colors">
                  {getIcon(project.title, project.category)}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                 <div className="flex items-center gap-2">
                    <BarChart3 size={14} className="text-slate-400" />
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tighter">Enterprise Automation</span>
                 </div>
                 
                 {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all shadow-sm"
                  >
                    Details <ExternalLink size={12} />
                  </a>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
