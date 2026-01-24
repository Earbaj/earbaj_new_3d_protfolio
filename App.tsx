
import React, { useState, useEffect, useMemo } from 'react';
import MobileSimulator from './components/MobileSimulator';
import TerminalSimulator from './components/TerminalSimulator';
import WebSimulator from './components/WebSimulator';
import ChatBot from './components/ChatBot';
import { PROJECTS, SKILL_CATEGORIES, OPEN_SOURCE } from './constants';
import { Project } from './types';

const CONTRIBUTIONS = [
  {
    title: 'High-Performance Architecture',
    summary: 'Architected scalable mobile features ensuring native-like 60FPS performance.',
    details: 'Leveraged RepaintBoundary and specific BLoC selectors to minimize widget tree rebuilds. Implemented a feature-first modular architecture that reduced build times by 25% for a team of 5 developers.',
    tech: 'BLoC, CustomPainter, Isolates'
  },
  {
    title: 'Secure Auth Systems',
    summary: 'Implemented secure authentication flows using JWT and biometric integration.',
    details: 'Integrated OAuth2.0 with refresh token rotation. Secured local sensitive data using AES-256 encryption via flutter_secure_storage and implemented FaceID/Biometric fallback logic.',
    tech: 'JWT, OAuth2, Biometrics'
  },
  {
    title: 'CI/CD Optimization',
    summary: 'Streamlined CI/CD pipelines reducing deployment time for beta testers.',
    details: 'Configured GitHub Actions for automated IPA/APK distribution to Firebase App Distribution. Automated semantic versioning and changelog generation, saving ~4 manual hours weekly.',
    tech: 'GitHub Actions, Fastlane, Firebase'
  },
  {
    title: 'UI/UX Engineering',
    summary: 'Collaborated with designers to ensure pixel-perfect fidelity across 10+ devices.',
    details: 'Used CustomPainter for complex data visualizations. Built a responsive design system utilizing LayoutBuilder and FractionallySizedBox to handle complex aspect ratios (9:16 to 4:3).',
    tech: 'Canvas API, Responsive UI'
  }
];

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'mobile' | 'backend' | 'web'>('mobile');
  const [activeProject, setActiveProject] = useState<Project>(PROJECTS[0]);
  const [activeSection, setActiveSection] = useState('about');
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);
  const [hoveredContrib, setHoveredContrib] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const firstOfCategory = PROJECTS.find(p => p.category === activeCategory);
    if (firstOfCategory) setActiveProject(firstOfCategory);
  }, [activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      // Use a smaller offset for smaller screens
      const offset = window.innerWidth < 768 ? 100 : 200;
      const scrollPos = window.scrollY + offset;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const handleProjectSelect = (p: Project) => {
    setActiveProject(p);
  };

  const navItemClass = (section: string) =>
    `transition-all duration-300 font-black text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:text-white cursor-pointer px-1.5 sm:px-2 py-1 ${activeSection === section ? 'text-white border-b-2 border-sky-400' : 'text-white/50'
    }`;

  const glassyButtonClass = "bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl font-black text-white transition-all active:scale-95 hover:bg-white/10 hover:border-white/40 flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg";

  return (
    <div className="min-h-screen selection:bg-sky-500/30 selection:text-white bg-[#0b0f1a] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-500 px-3 sm:px-4 md:px-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-6 flex justify-between items-center glass rounded-b-2xl sm:rounded-b-3xl md:rounded-b-[2.5rem] border-t-0 shadow-2xl backdrop-blur-xl bg-slate-950/60">
          <div
            onClick={(e) => scrollToSection(e as any, 'about')}
            className="text-base sm:text-lg md:text-2xl font-black tracking-tighter text-white cursor-pointer group flex items-center gap-1"
          >
            <span className="text-sky-400 group-hover:scale-110 transition-transform">E</span>ARBAJ<span className="text-white font-light hidden sm:inline">.SARIA</span>
          </div>

          <div className="flex gap-2 sm:gap-4 md:gap-8 items-center">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={navItemClass('about')}>About</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className={navItemClass('experience')}>Experience</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className={navItemClass('projects')}>Projects</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className={navItemClass('skills')}>Tech</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={navItemClass('contact')}>Contact</a>
          </div>

          <div className="hidden lg:block w-8"></div>
        </div>
      </nav>

      {/* Quote Section */}
      <div className="pt-28 md:pt-48 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="glass p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] border-white/5 bg-slate-900/10 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 sm:gap-6 border-l-4 border-l-sky-500 shadow-2xl shadow-sky-500/5 group">
          <div className="text-3xl md:text-5xl text-sky-400/30 font-black italic select-none group-hover:text-sky-400 transition-colors hidden sm:block">"</div>
          <div className="flex-1">
            <p className="text-sm sm:text-base md:text-xl text-white/90 font-black italic tracking-tight leading-relaxed uppercase text-left">
              Design is not just what it looks like and feels like. Design is <span className="text-sky-400">how it works</span>.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3 gap-2">
              <p className="text-[8px] sm:text-[10px] md:text-xs text-white/40 font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-left">
                — STEVE JOBS
              </p>
            </div>
          </div>
          <div className="text-3xl md:text-5xl text-sky-400/30 font-black italic select-none rotate-180 group-hover:text-sky-400 transition-colors hidden sm:block">"</div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="about" className="relative pt-8 sm:pt-12 md:pt-20 pb-16 sm:pb-20 md:pb-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden text-left scroll-mt-24">
        <div className="absolute top-20 left-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-sky-600/5 blur-[80px] sm:blur-[100px] rounded-full -z-10"></div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-center">
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg sm:rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-sky-400 text-[8px] sm:text-[9px] md:text-[11px] font-black tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase">
              <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-sky-400"></span>
              </span>
              Software Engineer at Evidentbd
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-white group cursor-default">
              <span className="inline-block transition-transform duration-500 group-hover:scale-[1.03] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400">
                Earbaj
              </span> <br />
              <span className="inline-block transition-transform duration-700 delay-75 group-hover:scale-[1.03] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400">
                Md. Saria
              </span>
            </h1>

            <div className="text-sm sm:text-base md:text-xl text-white max-w-2xl leading-relaxed font-light">
              <div className="space-y-4">
                <p>
                  I am a <b className="text-sky-400 font-black">Flutter-focused software engineer</b> with proven experience in developing and maintaining production-ready mobile applications for both <b className="text-sky-400 font-black">Android and iOS platforms</b>.
                  {!isSummaryExpanded && (
                    <button
                      onClick={() => setIsSummaryExpanded(true)}
                      className="text-sky-400 font-black ml-2 hover:text-sky-300 transition-colors uppercase text-[10px] sm:text-xs tracking-widest"
                    >
                      ... Read More
                    </button>
                  )}
                </p>
                {isSummaryExpanded && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-500">
                    <p>
                      In addition to mobile development, I design and implement <b className="text-sky-400 font-black">secure, scalable RESTful APIs</b> using <b className="text-sky-400 font-black">Node.js</b> and build <b className="text-sky-400 font-black">modern, responsive web dashboards</b> with <b className="text-sky-400 font-black">React</b>.
                    </p>
                    <p className="mt-4">
                      I specialize in delivering <b className="text-sky-400 font-black">end-to-end solutions</b>, covering everything from intuitive UI development and efficient state management to backend architecture, authentication, and deployment, with a strong focus on <b className="text-sky-400 font-black">performance, scalability, and maintainability</b>.
                    </p>
                    <button
                      onClick={() => setIsSummaryExpanded(false)}
                      className="text-sky-400 font-black hover:text-sky-300 transition-colors uppercase text-[10px] sm:text-xs tracking-widest block mt-4 border border-sky-400/20 px-4 py-2 rounded-lg bg-sky-400/5"
                    >
                      Read Less ↑
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 md:gap-10 pt-4">
              <button
                onClick={() => window.open('https://drive.google.com/file/d/1Cx7KGktIru8s-JrGd_3SZfH8_aeFl5Q-/view?usp=drive_link', '_blank')}
                className={`${glassyButtonClass} px-6 sm:px-8 md:px-14 py-4 sm:py-5 md:py-7 text-xs sm:text-sm md:text-lg`}
              >
                VIEW RESUME <span className="text-base sm:text-lg">↓</span>
              </button>
              <div className="flex items-center justify-around sm:justify-start gap-6 md:gap-10 sm:pl-10 sm:border-l border-white/10">
                <a href="https://github.com/Earbaj" target="_blank" className="text-white hover:text-sky-300 transition-all font-black text-[9px] sm:text-[10px] md:text-sm tracking-widest uppercase">GITHUB</a>
                <a href="https://www.linkedin.com/in/earbaj-saria-123152349/" target="_blank" className="text-white hover:text-sky-300 transition-all font-black text-[9px] sm:text-[10px] md:text-sm tracking-widest uppercase">LINKEDIN</a>
              </div>
            </div>
          </div>

          <div className="relative group mx-auto max-w-xs sm:max-w-sm lg:max-w-none">
            <div className="absolute -inset-4 sm:-inset-6 md:-inset-10 bg-sky-400/10 rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[5rem] blur-[60px] sm:blur-[80px] md:blur-[100px] opacity-40 group-hover:opacity-80 transition-all duration-1000"></div>
            <div className="glass p-3 sm:p-4 md:p-6 rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[5rem] relative shadow-3xl bg-slate-900/40">
              <div className="aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/10">
                <img src="/assets/earbaj_image.png" alt="Earbaj" className="w-full h-full object-cover grayscale-[0.2]" />
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 md:-bottom-8 md:-right-8 p-4 sm:p-6 md:p-8 glass rounded-2xl sm:rounded-3xl md:rounded-[3rem] border-white/20 shadow-2xl max-w-[140px] sm:max-w-[180px] md:max-w-xs backdrop-blur-2xl">
                <div className="text-[7px] sm:text-[8px] md:text-[10px] font-black text-sky-400 uppercase tracking-widest mb-1 italic text-left">Education</div>
                <div className="text-xs sm:text-sm md:text-base font-black text-white leading-tight text-left">B.Sc Engg in CSE</div>
                <div className="text-[8px] sm:text-[9px] md:text-[11px] text-white font-bold uppercase mt-1 tracking-tighter text-left">BUBT, Bangladesh</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Experience Section */}
      <section id="experience" className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-left scroll-mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-20 gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-white text-left">Working <span className="text-sky-400">Experience.</span></h2>
            <p className="text-white/60 text-sm sm:text-lg font-medium mt-4 max-w-xl">My journey through high-growth engineering environments and production-grade mobile architecture.</p>
          </div>
          <div className="hidden md:block h-px flex-1 mx-10 bg-gradient-to-r from-sky-400/50 to-transparent"></div>
        </div>

        <div className="glass p-6 sm:p-10 md:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] md:rounded-[5rem] border-white/10 bg-slate-900/40 shadow-3xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 blur-[100px] pointer-events-none"></div>

          <div className="relative border-l-2 sm:border-l-4 border-sky-400/20 pl-8 sm:pl-12 md:pl-20 space-y-16">
            <div className="relative">
              {/* Point Icon */}
              <div className="absolute -left-[41px] sm:-left-[60px] md:-left-[96px] top-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-2xl bg-slate-900 border-2 border-sky-400 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.4)] z-10 animate-pulse">
                <span className="text-sky-400 text-lg sm:text-2xl md:text-3xl">🚀</span>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-3">Software Engineer</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sky-400 font-black text-xs sm:text-sm uppercase tracking-widest italic">
                    <span>Evidentbd</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                    <span>Uttara, Dhaka</span>
                  </div>
                </div>
                <div className="px-5 py-2.5 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-300 font-black text-[10px] sm:text-xs tracking-widest shadow-xl">
                  JAN 2024 - PRESENT
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12">
                <div className="space-y-6">
                  <p className="text-white/80 text-sm sm:text-base md:text-xl font-light leading-relaxed">
                    At Evidentbd, I am a core member of the mobile engineering team, responsible for architecting and shipping mission-critical cross-platform solutions. I focus on bridging complex business logic with fluid, high-performance user interfaces.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { title: 'Reliability', val: '99.9%', desc: 'Crash-free user sessions across production environments.' },
                    { title: 'Performance', val: '-15%', desc: 'Reduction in API latency through strategic data caching.' },
                    { title: 'Technical Debt', val: '20%', desc: 'Improvement in code maintainability via clean architecture.' }
                  ].map((metric, i) => (
                    <div key={i} className="bg-white/[0.03] p-4 sm:p-6 rounded-2xl border border-white/5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">{metric.title}</span>
                        <span className="text-xl sm:text-2xl font-black text-sky-400">{metric.val}</span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-white/40 font-medium uppercase tracking-wider">{metric.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* KEY CONTRIBUTIONS WITH HOVER POPUPS */}
              <div className="space-y-4">
                <h4 className="text-[10px] sm:text-xs font-black text-white/30 uppercase tracking-[0.3em] mb-8">Key Contributions (Hover for details)</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {CONTRIBUTIONS.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative group/item"
                      onMouseEnter={() => setHoveredContrib(idx)}
                      onMouseLeave={() => setHoveredContrib(null)}
                    >
                      <div className={`flex gap-4 p-5 rounded-2xl transition-all duration-300 border ${hoveredContrib === idx ? 'bg-sky-400/10 border-sky-400/50 scale-[1.02]' : 'bg-white/[0.02] border-transparent hover:border-white/10'}`}>
                        <span className={`font-black transition-transform shrink-0 ${hoveredContrib === idx ? 'text-white' : 'text-sky-400'}`}>▹</span>
                        <div className="text-left">
                          <div className="text-[10px] sm:text-xs font-black text-white uppercase tracking-wide mb-1">{item.title}</div>
                          <span className="text-xs text-white/60 font-medium leading-relaxed">{item.summary}</span>
                        </div>
                      </div>

                      {/* HOVER POPUP */}
                      {hoveredContrib === idx && (
                        <div className="absolute left-0 sm:left-auto sm:right-0 bottom-full mb-4 w-full sm:w-[350px] z-[100] animate-in fade-in zoom-in slide-in-from-bottom-2 duration-300">
                          <div className="p-6 rounded-[2rem] bg-slate-900/95 backdrop-blur-2xl border border-sky-400/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
                              <span className="text-[12px] font-black text-sky-400 uppercase tracking-widest">Technical Deep-Dive</span>
                            </div>
                            <h5 className="text-sm font-black text-white mb-2 uppercase italic">{item.title}</h5>
                            <p className="text-xs text-white/80 leading-relaxed mb-4 font-light">
                              {item.details}
                            </p>
                            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                              <span className="text-[10px] font-black text-white/30 uppercase">Stack Used</span>
                              <span className="text-[10px] font-black text-sky-400">{item.tech}</span>
                            </div>
                          </div>
                          {/* Triangle arrow for popup */}
                          <div className="absolute left-8 sm:left-auto sm:right-8 top-full w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-sky-400/50"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto scroll-mt-24 text-left">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 sm:mb-16 md:mb-24 gap-6 sm:gap-10">
          <div className="text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-2 sm:mb-4 italic uppercase tracking-tighter text-white text-left">Works.</h2>
            <p className="text-white/80 max-w-xl font-medium text-sm sm:text-base md:text-lg leading-relaxed text-left">Mobile, Web & Backend solutions for complex ecosystems.</p>
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <div className="flex gap-4 border-b border-white/5 pb-2">
              <button
                onClick={() => setActiveCategory('mobile')}
                className={`text-[8px] sm:text-[10px] font-black uppercase tracking-widest transition-colors ${activeCategory === 'mobile' ? 'text-sky-400' : 'text-white/30 hover:text-white'}`}
              >
                Mobile Apps
              </button>
              <button
                onClick={() => setActiveCategory('web')}
                className={`text-[8px] sm:text-[10px] font-black uppercase tracking-widest transition-colors ${activeCategory === 'web' ? 'text-sky-400' : 'text-white/30 hover:text-white'}`}
              >
                Web Apps
              </button>
              <button
                onClick={() => setActiveCategory('backend')}
                className={`text-[8px] sm:text-[10px] font-black uppercase tracking-widest transition-colors ${activeCategory === 'backend' ? 'text-sky-400' : 'text-white/30 hover:text-white'}`}
              >
                Backend APIs
              </button>
            </div>

            <div className="flex flex-nowrap lg:flex-wrap gap-2 p-1.5 glass rounded-2xl md:rounded-[2.5rem] bg-slate-950/40 w-full lg:w-auto overflow-x-auto no-scrollbar scroll-smooth">
              {filteredProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleProjectSelect(p)}
                  className={`flex-none px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl md:rounded-[1.8rem] text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all border whitespace-nowrap ${activeProject.id === p.id ? 'bg-white/10 text-white shadow-xl border-white/30 scale-105' : 'bg-transparent text-white/50 border-transparent hover:text-white hover:bg-white/5'}`}
                >
                  {p.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 md:gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 md:space-y-12">
            <div className="glass p-6 sm:p-8 md:p-16 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[4.5rem] relative overflow-hidden bg-slate-900/20 text-left">
              <div className="absolute top-0 right-0 p-6 sm:p-8 md:p-12 hidden sm:block">
                <span className="text-4xl sm:text-6xl md:text-8xl font-black text-white/5">0{activeProject.id}</span>
              </div>
              <h4 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 sm:mb-6 leading-tight transition-colors text-left" style={{ color: activeProject.color }}>{activeProject.title}</h4>
              <p className="text-sm sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 md:mb-12 font-light text-left text-white/80">{activeProject.description}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mb-8 sm:mb-10 md:mb-16">
                {activeProject.tags.map(tag => (
                  <span key={tag} className="px-2 sm:px-3 py-1 sm:py-1.5 md:px-4 md:py-2 rounded-lg bg-white/5 text-white/80 text-[7px] sm:text-[8px] md:text-[9px] font-black uppercase border border-white/10">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <a href={activeProject.link} target="_blank" className="flex items-center gap-2 sm:gap-3 text-white font-black text-[8px] sm:text-[10px] md:text-xs tracking-widest hover:text-sky-400 transition-colors uppercase">REPO <span>↗</span></a>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center w-full overflow-hidden px-2">
            {activeProject.category === 'mobile' ? (
              <MobileSimulator activeProject={activeProject} />
            ) : activeProject.category === 'backend' ? (
              <TerminalSimulator activeProject={activeProject} />
            ) : (
              <WebSimulator activeProject={activeProject} />
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto scroll-mt-24 text-left">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16 md:mb-24 space-y-3 sm:space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-white text-center">Technical Stack.</h2>
          <div className="w-16 sm:w-20 md:w-32 h-1.5 sm:h-2 bg-sky-400 rounded-full"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="glass p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[4rem] group hover:bg-white/[0.03] transition-all bg-slate-900/20 border-white/5 text-left">
              <div className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-left">{category.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 sm:mb-3 uppercase italic tracking-tight transition-colors text-left">{category.title}</h3>
              <p className="text-white/70 text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-8 leading-relaxed font-medium text-left">{category.description}</p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map(skill => (
                  <span key={skill} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-[7px] sm:text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white group-hover:bg-white/10 group-hover:border-white/40 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 md:py-40 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto text-center scroll-mt-24">
        <div className="space-y-4 sm:space-y-6 md:space-y-8 mb-12 sm:mb-20 md:mb-32">
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black leading-tight tracking-tighter italic uppercase text-white/90">Contact <span className="text-sky-400">Me.</span></h2>
          <p className="text-sm sm:text-base md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
            Based in Dhaka, Bangladesh <br className="sm:hidden" />
            <span className="text-white font-bold block sm:inline">+8801832999277</span> <span className="hidden sm:inline">&middot;</span> <span className="text-sky-400 font-black underline decoration-sky-400/20 block sm:inline">earbajsaria3@gmail.com</span>
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 md:gap-16 text-left">
          <div className="lg:col-span-3">
            <form className="glass p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] space-y-6 sm:space-y-8 md:space-y-10 bg-slate-950/80 border border-white/5 text-left">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-white uppercase tracking-widest ml-2 sm:ml-3 text-left block">Name</label>
                  <input type="text" placeholder="YOUR NAME" className="w-full bg-slate-900/50 border border-white/10 rounded-xl md:rounded-2xl px-5 sm:px-6 md:px-8 py-3.5 sm:py-4 md:py-5 focus:border-sky-500/50 transition-all text-white font-bold text-[10px] sm:text-xs placeholder:text-white/30 outline-none text-left" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-white uppercase tracking-widest ml-2 sm:ml-3 text-left block">Email</label>
                  <input type="email" placeholder="EMAIL@EXAMPLE.COM" className="w-full bg-slate-900/50 border border-white/10 rounded-xl md:rounded-2xl px-5 sm:px-6 md:px-8 py-3.5 sm:py-4 md:py-5 focus:border-sky-500/50 transition-all text-white font-bold text-[10px] sm:text-xs placeholder:text-white/30 outline-none text-left" />
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <label className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-white uppercase tracking-widest ml-2 sm:ml-3 text-left block">Message</label>
                <textarea rows={5} placeholder="PROJECT DETAILS..." className="w-full bg-slate-900/50 border border-white/10 rounded-xl sm:rounded-2xl md:rounded-3xl px-5 sm:px-6 md:px-8 py-3.5 sm:py-4 md:py-5 focus:border-sky-500/50 transition-all text-white font-bold text-[10px] sm:text-xs placeholder:text-white/30 resize-none outline-none text-left"></textarea>
              </div>
              <button type="button" className={`${glassyButtonClass} w-full py-4 sm:py-5 md:py-7 text-[10px] sm:text-xs md:text-sm`}>Send Message</button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6 sm:space-y-8 md:space-y-10">
            <div className="glass p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-slate-900/20 text-left">
              <div className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-white mb-6 sm:mb-8 italic text-left">Social Hub</div>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { name: 'GitHub', url: 'https://github.com/Earbaj' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/earbaj-saria-123152349/' }
                ].map(social => (
                  <a key={social.name} href={social.url} target="_blank" className="flex justify-between items-center text-sm sm:text-base md:text-xl font-black text-white hover:text-sky-300 transition-all group/social">
                    {social.name.toUpperCase()}
                    <span className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-[7px] sm:text-[8px] group-hover/social:bg-sky-400 group-hover/social:text-white transition-all text-left">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-slate-900/20 text-left">
              <div className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-white mb-6 sm:mb-8 italic text-left">Open Source</div>
              <div className="space-y-4 sm:space-y-6">
                {OPEN_SOURCE.map(pkg => (
                  <a key={pkg.name} href={pkg.url} target="_blank" className="block group border-b border-white/5 pb-3 sm:pb-4 last:border-0 last:pb-0 text-left">
                    <div className="text-white font-bold text-xs sm:text-sm md:text-base group-hover:text-sky-300 transition-colors text-left">{pkg.name}</div>
                    <div className="text-[8px] sm:text-[9px] md:text-[10px] text-white/60 uppercase font-medium mt-1 text-left">{pkg.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-white/40">
        <div className="text-lg sm:text-xl font-black text-white/10 tracking-tighter uppercase">E. SARIA</div>
        <div className="text-[8px] sm:text-[10px] md:text-[12px] font-black tracking-[0.2em] sm:tracking-[0.4em] uppercase text-center text-white/50 leading-relaxed">
          &copy; {new Date().getFullYear()} SOFTWARE ENGINEER &middot; <span className="text-white">EARBAJ MD SARIA</span>
        </div>
      </footer>
      <ChatBot />
    </div>
  );
};

export default App;
