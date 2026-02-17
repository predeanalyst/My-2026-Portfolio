
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import { Mail, Linkedin, MapPin, ExternalLink, Cpu } from 'lucide-react';
import { YEARS_OF_EXPERIENCE } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        
        {/* Contact CTA */}
        <section id="contact" className="py-32 bg-slate-900 overflow-hidden relative border-t border-slate-800 scroll-mt-28">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
             <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
             <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Cpu size={14} /> Available for Strategic Consultation
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight">
              Let's build the future of <br /><span className="text-blue-500">Intelligent Energy.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Ready to deploy {YEARS_OF_EXPERIENCE}+ years of expertise in SAP landscapes and Machine Learning to optimize your financial and operational workflows.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="mailto:preciousiyekeoretin5@gmail.com" 
                className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)]"
              >
                <Mail size={24} /> Start Conversation
              </a>
              <a 
                href="https://www.linkedin.com/in/precious-iyekeoretin-sap-fico-bw-cpm-9b473b24a/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                <Linkedin size={24} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-black text-slate-500">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="text-3xl font-black text-white mb-8 flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Cpu size={24} />
                </div>
                <span>PI<span className="text-blue-600">.</span></span>
              </div>
              <p className="leading-relaxed mb-8 text-lg max-w-md">
                Bridging the gap between Enterprise Finance and Artificial Intelligence. Specialized in SAP BW/FICO ecosystems and Predictive Analytics for the global energy industry.
              </p>
              <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/precious-iyekeoretin-sap-fico-bw-cpm-9b473b24a/" target="_blank" className="text-white hover:text-blue-500 transition-all hover:scale-110"><Linkedin size={24} /></a>
                <a href="mailto:preciousiyekeoretin5@gmail.com" className="text-white hover:text-blue-500 transition-all hover:scale-110"><Mail size={24} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Resources</h4>
              <ul className="space-y-6 text-sm font-bold">
                <li><a href="#experience" className="hover:text-blue-500 transition-colors">Career Timeline</a></li>
                <li><a href="#projects" className="hover:text-blue-500 transition-colors">Project Portfolio</a></li>
                <li><a href="#education" className="hover:text-blue-500 transition-colors">Academic Credentials</a></li>
                <li><a href="#skills" className="hover:text-blue-500 transition-colors">Tech Stack</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Direct Contact</h4>
              <ul className="space-y-6 text-sm font-bold">
                <li className="flex items-center gap-3"><MapPin size={18} className="text-blue-600" /> Lagos State, Nigeria</li>
                <li className="flex items-center gap-3 text-white">
                   <Mail size={18} className="text-blue-600" /> 
                   preciousiyekeoretin5@gmail.com
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/precious-iyekeoretin-sap-fico-bw-cpm-9b473b24a/" 
                    target="_blank"
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-all"
                  >
                    Professional Network <ExternalLink size={14} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-700">
            <p>&copy; {new Date().getFullYear()} Precious Benjamin Iyekeoretin • {YEARS_OF_EXPERIENCE}+ Years of Innovation</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
