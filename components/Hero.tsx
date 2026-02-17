
import React from 'react';
import { ArrowRight, Linkedin, Mail, MapPin, ChevronDown, BrainCircuit, Database, ShieldCheck, Zap } from 'lucide-react';
import { PROFILE_IMAGE, YEARS_OF_EXPERIENCE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      
      <div className="max-w-6xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 z-10">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-blue-200">
              <Zap size={12} /> Over {YEARS_OF_EXPERIENCE} Years Experience
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white font-bold text-[10px] uppercase tracking-widest">
              Oil & Gas Expert
            </span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Precious <br />
              <span className="text-blue-600">Iyekeoretin</span>
            </h1>
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-slate-500 font-bold uppercase tracking-wider text-sm border-l-4 border-blue-600 pl-6">
              <span>AI & ML Engineer</span>
              <span className="text-slate-300 hidden md:inline">|</span>
              <span>Data Scientist</span>
              <span className="text-slate-300 hidden md:inline">|</span>
              <span>Finance Advisor</span>
              <span className="text-slate-300 hidden md:inline">|</span>
              <span>SAP FICO BW Consultant</span>
            </div>
          </div>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
            Bridging the gap between <span className="text-slate-900 font-bold underline decoration-blue-500 underline-offset-4">Enterprise Finance</span> and <span className="text-slate-900 font-bold underline decoration-blue-500 underline-offset-4">Artificial Intelligence</span>. Specialized in SAP BW/FICO ecosystems and Predictive Analytics for the energy industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 group"
            >
              Explore Portfolio <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4">
               <a 
                href="https://www.linkedin.com/in/precious-iyekeoretin-sap-fico-bw-cpm-9b473b24a/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white border-2 border-slate-100 text-slate-700 rounded-2xl flex items-center justify-center hover:bg-slate-50 hover:border-blue-200 transition-all shadow-sm"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:preciousiyekeoretin5@gmail.com" 
                className="w-14 h-14 bg-white border-2 border-slate-100 text-slate-700 rounded-2xl flex items-center justify-center hover:bg-slate-50 hover:border-blue-200 transition-all shadow-sm"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 text-slate-400 font-bold text-xs uppercase tracking-[0.2em] pt-8">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-blue-600" /> Lagos, Nigeria
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-green-600" /> Verified Expert
            </div>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          {/* Main Image Container */}
          <div className="relative z-10 aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[16px] border-white group">
            <img 
              src={PROFILE_IMAGE} 
              alt="Precious Benjamin Iyekeoretin" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-40" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl -z-0" />
          
          {/* Dynamic Floating Badges - Added z-30 to bring them strictly to the front */}
          <div className="absolute top-1/4 -right-12 bg-white/95 backdrop-blur-md p-5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50 animate-float flex items-center gap-4 pr-10 z-30">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-100">
              <Database size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Expertise</p>
              <p className="font-black text-slate-900 text-sm">SAP CONSULTANT</p>
            </div>
          </div>

          <div className="absolute bottom-16 -left-12 bg-slate-950 p-3 pl-3 pr-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-800 animate-float-delayed flex items-center gap-4 z-30">
            <div className="w-12 h-12 bg-blue-400 rounded-2xl flex items-center justify-center text-slate-950 shadow-lg shadow-blue-400/20">
              <BrainCircuit size={26} />
            </div>
            <div>
              <p className="text-[10px] text-blue-400/60 font-black uppercase tracking-widest leading-none mb-1">Innovation</p>
              <p className="font-black text-white text-sm">AI ENGINEER</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
        <ChevronDown className="text-slate-400" size={32} />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
