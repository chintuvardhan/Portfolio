import React, { useState, useEffect, useRef, useCallback, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';
// Small utilities for pages
const SetTitle: React.FC<{ title: string }> = ({ title }) => {
    useEffect(() => {
        const prev = document.title;
        document.title = title;
        return () => { document.title = prev; };
    }, [title]);
    return null;
};

const ScrollToTop: React.FC = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }, [location.pathname]);
    return null;
};

const LegacyFloatingLink: React.FC = () => {
    const location = useLocation();
    const map: Record<string, string> = {
        '/': '/home',
        '/about': '/home',
        '/skills': '/skills',
        '/projects': '/projects',
        '/experience': '/internships',
        '/education': '/academic',
        '/achievements': '/achievements',
        '/contact': '/get-in-touch',
    };
    const legacyPath = map[location.pathname] ?? '/home';
    return (
        <a
            href={`https://sites.google.com/view/dhoddi-portfolio${legacyPath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white/80 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/70 text-slate-700 dark:text-slate-200 shadow-lg backdrop-blur hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
            <span>View legacy</span>
            <span aria-hidden>↗</span>
        </a>
    );
};

// TYPES
interface Skill {
  name: string;
  level: number;
}

interface Project {
  title: string;
  description: string;
  image: string;
  skills: string[];
  link?: string;
  funded?: 'MSME' | 'KSCST';
}

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

interface Achievement {
  title: string;
  icon: ReactNode;
}

interface Education {
    degree: string;
    institution: string;
    period: string;
    score: string;
}

// DATA CONSTANTS

const SKILLS = {
  "Programming": [
    { name: "Python", level: 90 },
    { name: "SQL", level: 80 },
    { name: "Git", level: 85 },
  ],
  "Data Science": [
    { name: "Pandas", level: 95 },
    { name: "NumPy", level: 90 },
    { name: "Matplotlib & Seaborn", level: 85 },
    { name: "Scikit-learn", level: 80 },
  ],
  "Electronics": [
    { name: "IoT", level: 90 },
    { name: "Arduino IDE", level: 95 },
    { name: "VLSI", level: 75 },
    { name: "Embedded Systems", level: 85 },
  ],
  "Tools": [
    { name: "VS Code", level: 95 },
    { name: "GitHub", level: 90 },
    { name: "MS Office", level: 80 },
  ],
};

const PROJECTS: Project[] = [
    {
        title: "AI Project Implementer",
        description: "Educational app integrating chatbots, image classification, sentiment analysis, and image generation with code samples and live demos.",
        image: "https://picsum.photos/seed/ai-implementer/600/400",
        skills: ["AI", "Developer Tools", "Chatbots", "Image Classification"],
        link: "#",
    },
    {
        title: "Database Guru AI",
        description: "Intelligent AI assistant that converts natural language to SQL, optimizes queries, and assists in schema design for multiple database systems.",
        image: "https://picsum.photos/seed/db-guru/600/400",
        skills: ["Databases", "AI", "SQL", "Automation"],
        link: "#",
    },
    {
        title: "NeuroBabu AI Chat",
        description: "An AI-driven chat assistant focused on natural language understanding, supporting conversational queries and interactive Q&A.",
        image: "https://picsum.photos/seed/neurobabu/600/400",
        skills: ["AI", "NLP", "Chatbots"],
        link: "#",
    },
    {
        title: "AI Code Assistant",
        description: "An AI assistant for coding to help write, refactor, and understand code with intelligent suggestions, inspired by tools like Cursor IDE.",
        image: "https://picsum.photos/seed/code-assistant/600/400",
        skills: ["AI", "Software Development"],
        link: "#",
    },
    {
        title: "Smart Gloves Assistive Tech",
        description: "Wearable IoT device translating sign language to text/speech using sensor fusion and ML, facilitating communication for the hearing impaired.",
        image: "https://picsum.photos/seed/smartglove/600/400",
        skills: ["IoT", "ML", "Accessibility", "Sensor Fusion"],
        link: "#",
    },
    {
        title: "Ventilator Project",
        description: "Critical care ventilator developed with embedded systems and IoT for healthcare automation. A low-cost, effective solution for medical needs.",
        image: "https://picsum.photos/seed/ventilator/600/400",
        skills: ["Healthcare", "Embedded Systems", "IoT", "PCB Design"],
        link: "#",
        funded: "MSME",
    },
    {
        title: "Agro Robo",
        description: "A robotics solution for smart agriculture, using sensors for monitoring and automation to improve crop management and efficiency.",
        image: "https://picsum.photos/seed/agro/600/400",
        skills: ["Robotics", "IoT", "Agriculture", "Automation"],
        link: "#",
        funded: "KSCST",
    },
    {
        title: "Sensor Fusion Hand Movement Analysis",
        description: "A gesture recognition system using sensor fusion for rehabilitation and control interfaces, analyzing complex hand movements with high accuracy.",
        image: "https://picsum.photos/seed/sensor-fusion/600/400",
        skills: ["Embedded Systems", "AI", "Rehab Tech", "Sensor Fusion"],
        link: "#",
        funded: "KSCST",
    },
    {
        title: "AI Voice Assistant",
        description: "AI-powered assistant for automating daily tasks using NLP and speech recognition. Capable of web scraping, opening apps, and answering queries.",
        image: "https://picsum.photos/seed/voice/600/400",
        skills: ["AI", "Automation", "NLP", "Python"],
        link: "#",
    },
    {
        title: "Data Scraping Project",
        description: "Developed tools for automated extraction, transformation, and loading (ETL) of large datasets from various web sources for analytics pipelines.",
        image: "https://picsum.photos/seed/scraping/600/400",
        skills: ["Data Science", "Automation", "Python", "ETL"],
        link: "#",
    },
    {
        title: "NeuroMaster Minds",
        description: "A futuristic control room for AI tools. Manage, launch, and create complex AI workflows from a single, unified dashboard for maximum productivity.",
        image: "https://picsum.photos/seed/neuromaster/600/400",
        skills: ["AI", "Productivity", "Automation", "UI/UX"],
        link: "#",
    },
    {
        title: "PromptGen AI",
        description: "An advanced toolkit for AI-powered prompt engineering, analysis, and refinement, ensuring optimal results and performance for any generative model.",
        image: "https://picsum.photos/seed/promptgen/600/400",
        skills: ["AI", "Developer Tools"],
        link: "#",
    },
];

const EXPERIENCES: Experience[] = [
    {
        role: "Web Development Intern",
        company: "Rooman Technologies",
        duration: "Feb 2023 - Mar 2023",
        description: "Gained hands-on experience in web development, contributing to various projects and learning industry best practices.",
    },
    {
        role: "IoT Intern",
        company: "SJCIT",
        duration: "Jan 2023 - Feb 2023",
        description: "Worked on Internet of Things projects, focusing on sensor integration and data communication protocols.",
    },
    {
        role: "PCB Design Intern",
        company: "SJCIT",
        duration: "Dec 2022 - Jan 2023",
        description: "Designed and prototyped printed circuit boards for various electronic devices, enhancing skills in hardware design.",
    },
    {
        role: "Intern",
        company: "IBM & Wadhwani Interleap",
        duration: "May 2023 - Jun 2023",
        description: "Focused on API security and IoT, implementing secure communication channels for connected devices.",
    },
];

const EDUCATION: Education[] = [
    {
        degree: "Bachelor of Engineering (ECE)",
        institution: "SJCIT",
        period: "2021-2025",
        score: "CGPA: 7.7"
    },
    {
        degree: "Intermediate MPC",
        institution: "Govt. Junior College",
        period: "2019-2021",
        score: "Percentage: 70.6%"
    },
    {
        degree: "SSC",
        institution: "Jeevan Jyothi English Medium School",
        period: "2018-2019",
        score: "CGPA: 9.8"
    },
]


// ICONS
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
);
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);
const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
);

const AchievementIcon = ({ children }: { children: ReactNode }) => (
    <div className="text-4xl text-cyan-500 dark:text-cyan-400 mb-2">{children}</div>
);


// CUSTOM HOOK for scroll animations
const useIntersectionObserver = <T extends HTMLElement,>(options: IntersectionObserverInit & { triggerOnce?: boolean }) => {
    const ref = useRef<T | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (options.triggerOnce && ref.current) {
                    observer.unobserve(ref.current);
                }
            } else {
                if (!options.triggerOnce) {
                    setIsVisible(false);
                }
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isVisible] as const;
};

// AnimatedWrapper for section animations
const AnimatedSection: React.FC<{ children: ReactNode, id: string }> = ({ children, id }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });
    return (
        <section
            id={id}
            ref={ref}
            className={`py-20 px-4 md:px-8 transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {children}
        </section>
    );
};

const SectionTitle: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.5, triggerOnce: true });
    return (
         <h2 ref={ref} className={`text-4xl md:text-5xl font-bold text-center mb-12 relative transition-all duration-700 text-slate-900 dark:text-white ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            {children}
            <span className={`absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out ${isVisible ? 'w-24' : 'w-0'}`}></span>
        </h2>
    );
};

const ThemeToggle: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => (
    <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 dark:focus:ring-offset-slate-900"
    >
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
);


// COMPONENTS

const Header: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks: { label: string; path: string }[] = [
        { label: 'about', path: '/about' },
        { label: 'skills', path: '/skills' },
        { label: 'projects', path: '/projects' },
        { label: 'experience', path: '/experience' },
        { label: 'education', path: '/education' },
        { label: 'achievements', path: '/achievements' },
        { label: 'contact', path: '/contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-md dark:shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-widest group">
                    <span className="text-cyan-500 dark:text-cyan-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">D</span>
                    <span className="text-violet-500 dark:text-violet-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">M</span>
                    <span className="text-blue-500 dark:text-blue-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">K</span>
                    <span className="text-green-500 dark:text-green-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">R</span>
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                    <ul className="flex items-center space-x-6">
                        {navLinks.map(({ label, path }) => {
                            const active = location.pathname === path;
                            return (
                                <li key={path}>
                                    <Link
                                        to={path}
                                        aria-current={active ? 'page' : undefined}
                                        className={`capitalize text-base font-medium transition-colors duration-300 relative group ${active ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'}`}
                                    >
                                        {label}
                                        <span className={`absolute bottom-0 left-0 h-0.5 bg-cyan-500 dark:bg-cyan-400 transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
             <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                 <ul className="flex flex-col items-center justify-center py-4 bg-white/95 dark:bg-slate-900/95">
                     {navLinks.map(({ label, path }) => {
                        const active = location.pathname === path;
                        return (
                            <li key={`${path}-mobile`} className="py-2">
                                <Link
                                    to={path}
                                    onClick={() => setIsMenuOpen(false)}
                                    aria-current={active ? 'page' : undefined}
                                    className={`capitalize text-lg font-semibold transition-colors duration-300 ${active ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400'}`}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                 </ul>
            </div>
        </header>
    );
};

const Hero: React.FC = () => {
    const titles = ["Data Scientist", "Electronics Engineer", "IoT Innovator"];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = useCallback(() => {
        setOffsetY(window.pageYOffset);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [titles.length]);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden">
            <div
                className="absolute inset-0 bg-white/20 dark:bg-black/60"
                style={{ transform: `translateY(${offsetY * 0.5}px)` }}
            ></div>
            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/10 via-transparent to-blue-900/20 dark:from-black/30 dark:to-blue-900/50"
                style={{ transform: `translateY(${offsetY * 0.4}px)` }}
            ></div>
            <div className="relative z-10 w-full px-6 md:px-10 text-slate-900 dark:text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur border border-white/40 dark:border-white/10 shadow-2xl p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left: Profile image box (circular with thicker gradient border) */}
                    <div className="flex justify-center md:justify-start order-1">
                        <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-violet-500 to-cyan-500 shadow-2xl">
                            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden backdrop-blur bg-white/30 dark:bg-white/10">
                                <img
                                    src="/profile.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Intro text and actions */}
                    <div className="text-center md:text-left order-2">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400 animate-[fadeIn_1.2s_ease-in-out]">
                            Dhoddi Mallikarjuna Reddy
                        </h1>
                        <div className="text-2xl md:text-4xl font-semibold mb-8 h-12">
                            <span key={currentTitleIndex} className="animate-[slideUpFadeIn_1s_ease-out]">{titles[currentTitleIndex]}</span>
                        </div>
                        <div className="flex justify-center md:justify-start items-center gap-4">
                            <a href="/Dhoddi_Mallikarjuna_Reddy_CV.pdf" download className="px-8 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full text-lg font-semibold text-white hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transform transition-all duration-300">
                                Download CV
                            </a>
                            <a href="https://www.linkedin.com/in/dhoddi-mallikarjuna-reddy/" target="_blank" rel="noopener noreferrer" className="p-3 bg-black/10 dark:bg-white/10 rounded-full hover:bg-cyan-500/50 text-slate-800 dark:text-white hover:text-white transform transition-all duration-300"><LinkedInIcon /></a>
                            <a href="mailto:dhoddi.m.reddy@gmail.com" className="p-3 bg-black/10 dark:bg-white/10 rounded-full hover:bg-violet-500/50 text-slate-800 dark:text-white hover:text-white transform transition-all duration-300"><EmailIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

const About: React.FC = () => (
    <AnimatedSection id="about">
        <div className="container mx-auto max-w-6xl">
{{ ... }}
            <SectionTitle>About Me</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                {/* Profile */}
                <div className="md:col-span-2 flex justify-center">
                    <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-violet-500 to-cyan-500 shadow-2xl">
                        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-white/40 dark:bg-white/10 backdrop-blur">
                            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="md:col-span-3">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">Dhoddi Mallikarjuna Reddy</h3>
                    <p className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-3">Data Science & Electronics Engineer</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">Bangalore, India</p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        Passionate about building intelligent systems at the intersection of <span className="font-semibold">AI/ML</span> and <span className="font-semibold">Embedded/IoT</span>. I enjoy translating ideas into practical solutions — from analytics and modeling to sensor fusion and real‑world automation.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a href="/Dhoddi_Mallikarjuna_Reddy_CV.pdf" download className="px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold hover:opacity-95">Download CV</a>
                        <a href="mailto:dhoddi.m.reddy@gmail.com" className="px-5 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-white/10 inline-flex items-center gap-2"><EmailIcon /><span>Email</span></a>
                        <a href="https://www.linkedin.com/in/dhoddi-mallikarjuna-reddy/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-white/10 inline-flex items-center gap-2"><LinkedInIcon /><span>LinkedIn</span></a>
                    </div>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

const Skills: React.FC = () => {
    return (
        <AnimatedSection id="skills">
            <div className="container mx-auto">
                <SectionTitle>My Skills</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(SKILLS).map(([category, skills]) => (
                        <div key={category} className="p-6 rounded-lg bg-white dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 shadow-md dark:shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-6 text-center">{category}</h3>
                            <ul className="space-y-4">
                                {skills.map(skill => (
                                    <li key={skill.name}>
                                        <p className="font-medium mb-1 text-slate-700 dark:text-slate-200">{skill.name}</p>
                                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                                            <div className="bg-gradient-to-r from-violet-500 to-cyan-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

const getProjectTheme = (skills: string[]): string => {
    const lowerCaseSkills = skills.map(s => s.toLowerCase());
    if (lowerCaseSkills.some(s => ['ai', 'nlp', 'ml'].includes(s))) {
        return 'ai';
    }
    if (lowerCaseSkills.some(s => ['iot', 'embedded systems', 'robotics', 'sensor fusion'].includes(s))) {
        return 'iot';
    }
    if (lowerCaseSkills.some(s => ['data science', 'databases', 'sql'].includes(s))) {
        return 'data';
    }
    return 'default';
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2, triggerOnce: true });
    const [imageLoaded, setImageLoaded] = useState(false);
    
    const theme = getProjectTheme(project.skills);
    const themeShadowClass = {
        ai: 'hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30',
        iot: 'hover:shadow-green-500/30 dark:hover:shadow-green-400/30',
        data: 'hover:shadow-violet-500/30 dark:hover:shadow-violet-400/30',
        default: 'hover:shadow-cyan-500/30 dark:hover:shadow-cyan-400/30',
    }[theme];

    const fundingBadge = (funded: 'MSME' | 'KSCST') => {
        const style = funded === 'MSME' 
            ? 'bg-green-500/20 text-green-600 dark:text-green-300 border-green-400/50' 
            : 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-300 border-yellow-400/50';
        return (
            <div className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full border ${style}`}>
                ⭐ {funded} Funded
            </div>
        );
    };

    return (
        <div
            ref={ref}
            className={`p-6 rounded-lg bg-white dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 shadow-md dark:shadow-lg flex flex-col h-full transform hover:-translate-y-2 hover:scale-[1.03] ${themeShadowClass} transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="relative mb-4">
                <div className={`relative w-full h-48 rounded-md overflow-hidden bg-slate-200 dark:bg-slate-700 ${!imageLoaded ? 'shimmer' : ''}`}>
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className={`w-full h-48 object-cover absolute top-0 left-0 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
                {project.funded && fundingBadge(project.funded)}
            </div>
            <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map(skill => (
                        <span key={skill} className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{skill}</span>
                    ))}
                </div>
                {project.link && <a href={project.link} className="text-violet-600 dark:text-violet-400 font-semibold hover:underline mt-auto">Learn More &rarr;</a>}
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(PROJECTS);

    const allSkills = ["All", ...Array.from(new Set(PROJECTS.flatMap(p => p.skills)))].sort();

    useEffect(() => {
        if (activeFilter === 'All') {
            setFilteredProjects(PROJECTS);
        } else {
            setFilteredProjects(PROJECTS.filter(p => p.skills.includes(activeFilter)));
        }
    }, [activeFilter]);

    return (
        <AnimatedSection id="projects">
            <div className="container mx-auto">
                <SectionTitle>Projects</SectionTitle>
                <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                    {allSkills.map(skill => (
                        <button
                            key={skill}
                            onClick={() => setActiveFilter(skill)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full border-2 transition-all duration-300 transform hover:scale-105 ${
                                activeFilter === skill
                                ? 'bg-cyan-500 border-cyan-500 text-white shadow-md shadow-cyan-500/30'
                                : 'bg-white/50 dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-cyan-500/10 hover:border-cyan-500/50'
                            }`}
                        >
                            {skill}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};


const Experience: React.FC = () => (
    <AnimatedSection id="experience">
        <div className="container mx-auto">
            <SectionTitle>Internships & Experience</SectionTitle>
            <div className="relative max-w-3xl mx-auto before:content-[''] before:absolute before:left-4 md:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-slate-300 dark:before:bg-slate-700">
                {EXPERIENCES.map((exp, index) => {
                    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5, triggerOnce: true });
                    const isLeft = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            ref={ref}
                            className={`relative mb-8 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isLeft ? '-translate-x-10' : 'translate-x-10'}`}`}
                        >
                            <div className={`md:flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className="md:w-1/2"></div>
                                <div className="md:w-1/2 pl-8 md:pl-0">
                                     <div className={`p-6 rounded-lg bg-white dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 shadow-md dark:shadow-lg ${isLeft ? 'md:ml-8' : 'md:mr-8'}`}>
                                        <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-1">{exp.duration}</p>
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{exp.role}</h3>
                                        <p className="text-md text-violet-600 dark:text-violet-400 mb-2">{exp.company}</p>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-violet-500 rounded-full border-2 border-white dark:border-slate-900"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    </AnimatedSection>
);

const Achievements: React.FC = () => {
    const achievements: Achievement[] = [
        { title: "IEEE SB Chair", icon: <AchievementIcon>🏆</AchievementIcon> },
        { title: "12+ Real-world Projects", icon: <AchievementIcon>🚀</AchievementIcon> },
        { title: "KSCST Project Selection", icon: <AchievementIcon>🔬</AchievementIcon> },
        { title: "MSME Funding Recipient", icon: <AchievementIcon>💰</AchievementIcon> },
    ];
    
    return (
        <AnimatedSection id="achievements">
            <div className="container mx-auto">
                <SectionTitle>Achievements</SectionTitle>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {achievements.map((ach, index) => {
                         const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5, triggerOnce: true });
                         return (
                            <div
                                key={index}
                                ref={ref}
                                className={`p-6 text-center rounded-lg bg-white dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 shadow-md dark:shadow-lg transform hover:scale-105 hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/30 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                style={{transitionDelay: `${index * 100}ms`}}
                            >
                                {ach.icon}
                                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{ach.title}</h3>
                            </div>
                         );
                    })}
                </div>
            </div>
        </AnimatedSection>
    );
};

const EducationTimeline: React.FC = () => (
    <AnimatedSection id="education">
        <div className="container mx-auto">
            <SectionTitle>Education</SectionTitle>
            <div className="relative max-w-3xl mx-auto before:content-[''] before:absolute before:left-4 md:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-slate-300 dark:before:bg-slate-700">
                {EDUCATION.map((edu, index) => {
                    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5, triggerOnce: true });
                    const isRight = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            ref={ref}
                            className={`relative mb-8 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRight ? 'translate-x-10' : '-translate-x-10'}`}`}
                        >
                            <div className={`md:flex items-center ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                <div className="md:w-1/2"></div>
                                <div className="md:w-1/2 pl-8 md:pl-0">
                                    <div className={`p-6 rounded-lg bg-white dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 shadow-md dark:shadow-lg ${isRight ? 'md:mr-8' : 'md:ml-8'}`}>
                                        <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-1">{edu.period}</p>
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{edu.degree}</h3>
                                        <p className="text-md text-violet-600 dark:text-violet-400 mb-2">{edu.institution}</p>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">{edu.score}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-white dark:border-slate-900"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    </AnimatedSection>
);

const Contact: React.FC = () => {
    const [status, setStatus] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Thank you for your message!');
        setTimeout(() => setStatus(''), 3000);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <AnimatedSection id="contact">
            <div className="container mx-auto max-w-3xl">
                <SectionTitle>Get In Touch</SectionTitle>
                <div className="p-8 rounded-lg bg-white dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Your Name" required className="w-full p-3 bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-slate-800 dark:text-white"/>
                            <input type="email" placeholder="Your Email" required className="w-full p-3 bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-slate-800 dark:text-white"/>
                        </div>
                        <textarea placeholder="Your Message" rows={5} required className="w-full p-3 bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-slate-800 dark:text-white"></textarea>
                        <div className="text-center">
                            <button type="submit" className="px-8 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full text-lg font-semibold text-white hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50 transform transition-all duration-300 active:scale-95">
                                Send Message
                            </button>
                        </div>
                        {status && <p className="text-center mt-4 text-green-500 dark:text-green-400">{status}</p>}
                    </form>
                     <div className="text-center mt-8">
                        <p className="mb-4 text-slate-600 dark:text-slate-300">Or reach out directly:</p>
                        <div className="flex justify-center items-center space-x-6 text-slate-700 dark:text-slate-200">
                            <a href="https://www.linkedin.com/in/dhoddi-mallikarjuna-reddy/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 group">
                                <LinkedInIcon />
                                <span className="group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">LinkedIn</span>
                            </a>
                             <a href="mailto:dhoddi.m.reddy@gmail.com" className="flex items-center space-x-2 group">
                                <EmailIcon />
                                <span className="group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="mt-16 bg-slate-100/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <Link to="/" className="inline-flex items-center gap-2 font-extrabold text-xl tracking-wider">
                        <span className="text-cyan-500">D</span>
                        <span className="text-violet-500">M</span>
                        <span className="text-blue-500">K</span>
                        <span className="text-green-500">R</span>
                    </Link>
                    <p className="mt-3 text-sm leading-6">
                        Portfolio of Dhoddi Mallikarjuna Reddy — Data Science and Electronics Engineer. Exploring AI, IoT, and impactful products with a passion for craft and clarity.
                    </p>
                    <div className="mt-4">
                        <a href="https://sites.google.com/view/dhoddi-portfolio/home" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-cyan-300 hover:underline">
                            View Legacy Portfolio ↗
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-cyan-600 dark:hover:text-cyan-400">Home</Link></li>
                        <li><Link to="/about" className="hover:text-cyan-600 dark:hover:text-cyan-400">About</Link></li>
                        <li><Link to="/skills" className="hover:text-cyan-600 dark:hover:text-cyan-400">Skills</Link></li>
                        <li><Link to="/projects" className="hover:text-cyan-600 dark:hover:text-cyan-400">Projects</Link></li>
                        <li><Link to="/experience" className="hover:text-cyan-600 dark:hover:text-cyan-400">Experience</Link></li>
                        <li><Link to="/education" className="hover:text-cyan-600 dark:hover:text-cyan-400">Education</Link></li>
                        <li><Link to="/achievements" className="hover:text-cyan-600 dark:hover:text-cyan-400">Achievements</Link></li>
                        <li><Link to="/contact" className="hover:text-cyan-600 dark:hover:text-cyan-400">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-4">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <a href="mailto:dhoddi.m.reddy@gmail.com" className="inline-flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400">
                                <EmailIcon />
                                <span>dhoddi.m.reddy@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/dhoddi-mallikarjuna-reddy/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400">
                                <LinkedInIcon />
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="/Dhoddi_Mallikarjuna_Reddy_CV.pdf" download className="inline-flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400">
                                <span aria-hidden>📄</span>
                                <span>Download CV</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-4">Location</h4>
                    <p className="text-sm">Bangalore, India</p>
                    <p className="text-sm mt-2">Open to opportunities in AI, Data, and Embedded/IoT.</p>
                </div>
            </div>

            <div className="border-t border-slate-200/60 dark:border-slate-800/60">
                <div className="container mx-auto px-6 py-4 text-xs flex flex-col md:flex-row items-center justify-between gap-2">
                    <p className="text-slate-600 dark:text-slate-400">&copy; {new Date().getFullYear()} Dhoddi Mallikarjuna Reddy. All rights reserved.</p>
                    <p className="text-slate-500 dark:text-slate-500">Built with React + Vite · Tailwind via CDN</p>
                </div>
            </div>
        </footer>
    );
};


// Layout with Header/Footer and theming
const Layout: React.FC = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a1a] text-gray-800 dark:text-gray-200 font-sans leading-normal tracking-wider transition-colors duration-300">
            <style>{`
                @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
                @keyframes slideUpFadeIn { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                .shimmer::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    transform: translateX(-100%);
                    background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    animation: shimmer 1.5s infinite;
                }
                html.dark .shimmer::after {
                    background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
                }
            `}</style>
            <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-[#0a0a1a] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1a202c_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl -z-10 animate-[spin_20s_linear_infinite]"></div>
            <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl -z-10 animate-[spin_25s_linear_infinite_reverse]"></div>

            <Header theme={theme} toggleTheme={toggleTheme}/>
            <main className="flex-1">
                <Outlet />
            </main>
            <LegacyFloatingLink />
            <Footer />
        </div>
    );
};

// Pages
const Home: React.FC = () => (
    <>
        <SetTitle title="DMKR | Home" />
        <Hero />
    </>
);

const AboutPage: React.FC = () => (
    <>
        <SetTitle title="DMKR | About" />
        <About />
    </>
);
const SkillsPage: React.FC = () => (
    <>
        <SetTitle title="DMKR | Skills" />
        <Skills />
    </>
);
const ProjectsPage: React.FC = () => (
    <>
        <SetTitle title="DMKR | Projects" />
        <Projects />
    </>
);
const ExperiencePage: React.FC = () => (
    <>
        <SetTitle title="DMKR | Experience" />
        <Experience />
    </>
);
const EducationPage: React.FC = () => (
    <>
        <SetTitle title="DMKR | Education" />
        <EducationTimeline />
    </>
);
const AchievementsPage: React.FC = () => (
    <>
        <SetTitle title="DMKR | Achievements" />
        <Achievements />
    </>
);
const ContactPage: React.FC = () => (
    <>
        <SetTitle title="DMKR | Contact" />
        <Contact />
    </>
);

const NotFoundPage: React.FC = () => (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
        <SetTitle title="DMKR | Not Found" />
        <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold text-slate-800 dark:text-white mb-4">404</h1>
            <p className="text-slate-600 dark:text-slate-300 mb-6">The page you’re looking for doesn’t exist.</p>
            <div className="flex gap-4 justify-center">
                <Link to="/" className="px-5 py-2 rounded-full bg-cyan-600 text-white font-semibold hover:opacity-90">Go Home</Link>
                <a href="https://sites.google.com/view/dhoddi-portfolio/home" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-white/10">Legacy Site</a>
            </div>
        </div>
    </div>
);

// Main App Component with Router
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/skills" element={<SkillsPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/education" element={<EducationPage />} />
                    <Route path="/achievements" element={<AchievementsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;