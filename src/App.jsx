import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CaseStudyModal from './components/CaseStudyModal';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70; 
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'portfolio', 'process', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-slate-900 text-white shadow-2xl border border-orange-500/40">
            <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
            <button 
              onClick={() => setToastMessage(null)}
              className="p-1 text-slate-400 hover:text-white rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Sticky Header Navbar */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Page Sections */}
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Services scrollToSection={scrollToSection} />
        {/* <Portfolio onOpenCaseStudy={(project) => setActiveCaseStudy(project)} /> */}
        <Process />
        <WhyChooseUs />
        {/* <Testimonials /> */}
        <CtaBanner scrollToSection={scrollToSection} />
        <Contact showToast={showToast} />
      </main>

      {/* Case Study Modal Overlay */}
      <CaseStudyModal 
        project={activeCaseStudy} 
        onClose={() => setActiveCaseStudy(null)} 
        onStartProject={() => scrollToSection('contact')} 
      />

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />

    </div>
  );
}
