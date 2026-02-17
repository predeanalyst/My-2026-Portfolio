
import React from 'react';
import { ArrowRight, Linkedin, Mail, MapPin, ChevronDown, BrainCircuit, Database } from 'lucide-react';
import { PROFILE_IMAGE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 -skew-x-12 translate-x-1/4 -z-10 opacity-50" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      
      <div className="max-w-6xl mx-auto px-4 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-600/10 text-blue-700 font-bold text-sm border border-blue-600/20">
            <BrainCircuit size={16} />
            <span>Data Scientist • AI & ML in Oil & Gas</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Precious Benjamin <br />
            <span className="text-blue-600">Iyekeoretin</span>
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg font-medium">
            Bridging the gap between Enterprise Finance and Artificial Intelligence. Specialized in <span className="text-slate-900 font-bold">SAP BW/FICO</span> ecosystems and <span className="text-slate-900 font-bold">Predictive Analytics</span> for the energy industry.
          </p>
          
          <div className="flex flex-col gap-3 text-slate-500 text-sm font-semibold">
             <div className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors cursor-pointer">
              <Mail size={16} className="text-blue-600" /> 
              preciousiyekeoretin5@gmail.com
             </div>
             <div className="flex items-center gap-2 text-slate-700">
              <MapPin size={16} className="text-blue-600" /> 
              Lagos State, Nigeria • Hybrid / Remote
             </div>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
            >
              Explore AI & Data Projects <ArrowRight size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/precious-iyekeoretin-sap-fico-bw-cpm-9b473b24a/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl relative group border-[12px] border-white ring-1 ring-slate-100">
            <img 
              src={PROFILE_IMAGE} 
              alt="Precious Benjamin Iyekeoretin" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
          </div>
          
          {/* Floating badge 1 */}
          <div className="absolute -top-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 hidden lg:block animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <Database size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Expertise</p>
                <p className="font-extrabold text-slate-900">SAP BW HANA</p>
              </div>
            </div>
          </div>

          {/* Floating badge 2 */}
          <div className="absolute -bottom-8 -right-8 bg-slate-900 p-5 rounded-2xl shadow-2xl border border-slate-800 hidden lg:block animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white">
                <BrainCircuit size={24} />
              </div>
              <div>
                <p className="text-xs text-blue-300 font-bold uppercase tracking-widest">Innovation</p>
                <p className="font-extrabold text-white">Oil & Gas AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
        <ChevronDown className="text-slate-400" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
