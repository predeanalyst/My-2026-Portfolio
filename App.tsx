
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import AIImageLab from './components/AIImageLab';
import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <AIImageLab />
        
        {/* Contact CTA */}
        <section className="py-24 bg-blue-600 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full">
             <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
             <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to transform your business processes?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether it's a new SAP implementation, a complex data migration, or optimized financial reporting, let's discuss how my expertise can drive value for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:preciousiyekeoretin5@gmail.com" 
                className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-blue-50 transition-all shadow-xl"
              >
                <Mail size={24} /> Get in Touch
              </a>
              <a 
                href="https://www.linkedin.com/in/precious-iyekeoretin-sap-fico-bw-cpm-9b473b24a/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-blue-700 text-white border border-blue-500 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-blue-800 transition-all"
              >
                <Linkedin size={24} /> View Full Profile
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg" />
                <span>PI.</span>
              </div>
              <p className="leading-relaxed mb-6 text-sm">
                Specialized SAP Consultant & Data Analyst focusing on Financial Accounting, Business Intelligence, and Oil & Gas Finance Automation.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/precious-iyekeoretin-sap-fico-bw-cpm-9b473b24a/" target="_blank" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
                <a href="mailto:preciousiyekeoretin5@gmail.com" className="hover:text-blue-400 transition-colors"><Mail size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
                <li><a href="#ai-lab" className="hover:text-white transition-colors">AI Studio</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Contacts</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3"><MapPin size={18} /> Lagos State, Nigeria</li>
                <li className="flex items-center gap-3"><Linkedin size={18} /> @precious-iyekeoretin</li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/precious-iyekeoretin-sap-fico-bw-cpm-9b473b24a/" 
                    target="_blank"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
                  >
                    LinkedIn Profile <ExternalLink size={14} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} Precious Benjamin Iyekeoretin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
