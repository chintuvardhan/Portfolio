<<<<<<< HEAD
import emailjs from 'emailjs-com';
import React, { useState, useEffect, useRef, useCallback, useMemo, ReactNode, Component } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';
const Skills = React.lazy(() => import('./src/components/Skills/Skills'));
=======
import React, { useState, useEffect, useRef, useCallback, useMemo, ReactNode, Component } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';
import { Skills } from './src/components/Skills/Skills';
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'lottie-player': any;
        }
    }
}

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
    return null;
};

// TYPES
interface Skill {
  name: string;
  level: number;
}

<<<<<<< HEAD
interface Testimonial {
    name: string;
    role: string;
    text: string;
    avatar: string;
}
const TESTIMONIALS: Testimonial[] = [
    {
        name: "Dr. S. Kumar",
        role: "Mentor, SJCIT",
        text: "Mallikarjuna's dedication to AI and IoT innovation is truly inspiring. His projects consistently push boundaries and deliver real-world impact.",
        avatar: "/profile.jpg"
    },
    {
        name: "A. Sharma",
        role: "Client, Data Analytics",
        text: "Professional, reliable, and highly skilled. The data dashboard he built transformed our business insights.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "IEEE Team",
        role: "Student Branch",
        text: "As chair, he led our team to new heights, organizing events and mentoring with passion.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "ProTech Innovators",
        role: "Project Consultancy",
        text: "Guided us through our final year project with expert advice and technical mentorship.",
        avatar: "https://randomuser.me/api/portraits/men/65.jpg"
    }
];

interface BlogPost {
    title: string;
    date: string;
    excerpt: string;
    link: string;
    image: string;
}

const TestimonialsCarousel: React.FC = () => {
    const [active, setActive] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="relative">
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-cyan-400 shadow-lg">
                    <img src={TESTIMONIALS[active].avatar} alt={TESTIMONIALS[active].name} className="w-full h-full object-cover" />
                </div>
                <blockquote className="text-xl italic text-slate-700 dark:text-slate-200 mb-4 max-w-xl text-center">
                    "{TESTIMONIALS[active].text}"
                </blockquote>
                <div className="font-bold text-cyan-600 dark:text-cyan-400">{TESTIMONIALS[active].name}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">{TESTIMONIALS[active].role}</div>
                <div className="flex gap-2 mt-4">
                    {TESTIMONIALS.map((_, idx) => (
                        <button key={idx} onClick={() => setActive(idx)} aria-label={`Show testimonial ${idx+1}`}
                            className={`w-3 h-3 rounded-full ${active === idx ? 'bg-cyan-500' : 'bg-slate-300 dark:bg-slate-700'} transition-all`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const BLOG_POSTS: BlogPost[] = [
    {
        title: "How AI is Transforming IoT Solutions",
        date: "September 2025",
        excerpt: "A look at the convergence of artificial intelligence and IoT, with real-world project examples.",
        link: "#",
        image: "https://picsum.photos/seed/aiiot/400/240"
    },
    {
        title: "Building a Career in Data Science & Electronics",
        date: "August 2025",
        excerpt: "Tips and lessons from my journey in engineering, research, and innovation.",
        link: "#",
        image: "https://picsum.photos/seed/career/400/240"
    },
    {
        title: "Project Showcase: Smart Gloves for Accessibility",
        date: "July 2025",
        excerpt: "Behind the scenes of developing assistive tech for sign language translation.",
        link: "#",
        image: "https://picsum.photos/seed/gloves/400/240"
    }
];

=======
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
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

interface SkillCategory {
  name: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    description: string;
    projects?: string[];
  }[];
}

export const SKILLS: SkillCategory[] = [
  {
    name: "Programming",
    description: "Core coding languages and version control",
    icon: "💻",
    skills: [
      { 
        name: "Python", 
        level: 90,
        description: "Proficient in Python for data analysis, automation, and backend development",
        projects: ["AI Project Implementer", "Database Guru AI", "AI Code Assistant"]
      },
      { 
        name: "SQL", 
        level: 85,
        description: "Expertise in writing complex queries, database design, and optimization",
        projects: ["Data Analytics Dashboard", "E-commerce Backend"]
      },
      { 
        name: "Git", 
        level: 90,
        description: "Version control and collaborative development workflows",
        projects: ["All Projects"]
      },
    ]
  },
  {
    name: "Data Science",
    description: "Data manipulation, analysis, and visualization",
    icon: "📊",
    skills: [
      { 
        name: "Pandas", 
        level: 95,
        description: "Advanced data manipulation and analysis with Pandas DataFrames",
        projects: ["Data Analysis Pipeline", "Financial Data Processor"]
      },
      { 
        name: "NumPy", 
        level: 90,
        description: "Numerical computing and array operations",
        projects: ["Image Processing", "Simulation Models"]
      },
      { 
        name: "Matplotlib & Seaborn", 
        level: 85,
        description: "Creating insightful data visualizations",
        projects: ["Data Analytics Dashboard", "Research Paper Visualizations"]
      },
      { 
        name: "Scikit-learn", 
        level: 85,
        description: "Machine learning model development and evaluation",
        projects: ["Predictive Analytics", "Classification Models"]
      },
    ]
  },
  {
    name: "Electronics",
    description: "Hardware and embedded systems",
    icon: "🔌",
    skills: [
      { 
        name: "IoT", 
        level: 90,
        description: "Design and implementation of IoT solutions",
        projects: ["Smart Home System", "Environmental Monitoring"]
      },
      { 
        name: "Arduino IDE", 
        level: 95,
        description: "Firmware development for microcontrollers",
        projects: ["Robotics Controller", "Sensor Networks"]
      },
      { 
        name: "VLSI", 
        level: 75,
        description: "Very Large Scale Integration design and simulation",
        projects: ["Processor Design", "Digital Circuits"]
      },
      { 
        name: "Embedded Systems", 
        level: 85,
        description: "Developing real-time embedded applications",
        projects: ["Medical Device Firmware", "Industrial Controllers"]
      },
    ]
  },
  {
    name: "Tools",
    description: "Development and productivity tools",
    icon: "🛠️",
    skills: [
      { 
        name: "VS Code", 
        level: 95,
        description: "Primary code editor with extensive customization",
        projects: ["All Development Projects"]
      },
      { 
        name: "GitHub", 
        level: 90,
        description: "Code hosting and version control",
        projects: ["Open Source Contributions", "Team Projects"]
      },
      { 
        name: "MS Office", 
        level: 85,
        description: "Documentation and data analysis",
        projects: ["Project Reports", "Data Analysis"]
      },
    ]
  },
];

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
        institution: "Government Junior College",
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
const useIntersectionObserver = <T extends HTMLElement = HTMLElement>(
    options: IntersectionObserverInit & { triggerOnce?: boolean } = {}
): [React.RefObject<T | null>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const currentRef = ref.current;
        const { triggerOnce = false, ...observerOptions } = options;
        
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                if (entry.isIntersecting && triggerOnce) {
                    observer.unobserve(entry.target);
                }
            },
            observerOptions
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return [ref, isVisible] as const;
};

// AnimatedWrapper for section animations
const AnimatedSection: React.FC<{ children: ReactNode, id: string, className?: string }> = ({ children, id, className = '' }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });
    return (
        <section
            ref={ref}
            id={id}
            className={`py-20 px-4 md:px-8 transition-all duration-1000 ease-in-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${className}`}
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
        { label: 'services', path: '/services' },
        { label: 'skills', path: '/skills' },
        { label: 'projects', path: '/projects' },
        { label: 'experience', path: '/experience' },
        { label: 'education', path: '/education' },
        { label: 'achievements', path: '/achievements' },
        { label: 'contact', path: '/contact' },
    ];

<<<<<<< HEAD
    // Keyboard navigation for menu
    const navRef = useRef<HTMLUListElement>(null);
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!navRef.current) return;
            const links = Array.from(navRef.current.querySelectorAll('a'));
            const active = document.activeElement;
            const idx = links.indexOf(active as HTMLAnchorElement);
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                if (idx >= 0 && idx < links.length - 1) links[idx + 1].focus();
            }
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                if (idx > 0) links[idx - 1].focus();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg shadow-md dark:shadow-lg ${isScrolled || isMenuOpen ? 'bg-gradient-to-r from-cyan-50/90 via-blue-50/90 to-purple-50/90 dark:from-slate-900/95 dark:via-slate-800/95 dark:to-slate-900/95' : 'bg-gradient-to-r from-cyan-50/95 via-blue-50/95 to-purple-50/95 dark:from-slate-900/97 dark:via-slate-800/97 dark:to-slate-900/97'}`}>
            <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                <Link to="/about" className="text-2xl font-bold tracking-widest group" aria-label="Go to About">
=======
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg shadow-md dark:shadow-lg ${isScrolled || isMenuOpen ? 'bg-gradient-to-r from-cyan-50/90 via-blue-50/90 to-purple-50/90 dark:from-slate-900/95 dark:via-slate-800/95 dark:to-slate-900/95' : 'bg-gradient-to-r from-cyan-50/95 via-blue-50/95 to-purple-50/95 dark:from-slate-900/97 dark:via-slate-800/97 dark:to-slate-900/97'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/about" className="text-2xl font-bold tracking-widest group">
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
                    <span className="text-cyan-500 dark:text-cyan-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">D</span>
                    <span className="text-violet-500 dark:text-violet-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">M</span>
                    <span className="text-blue-500 dark:text-blue-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">K</span>
                    <span className="text-green-500 dark:text-green-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">R</span>
                </Link>
<<<<<<< HEAD
                <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
                    <ul className="flex items-center space-x-4 sm:space-x-6" ref={navRef} role="menubar" aria-label="Main navigation">
                        {navLinks.map(({ label, path }) => {
                            const active = location.pathname === path;
                            return (
                                <li key={path} role="none">
                                    <Link
                                        to={path}
                                        aria-current={active ? 'page' : undefined}
                                        aria-label={`Go to ${label}`}
                                        className={`capitalize text-base font-medium transition-colors duration-300 relative group px-2 py-2 rounded-lg ${active ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent' : 'text-slate-600 dark:text-slate-300 hover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-500 hover:to-purple-700 hover:bg-clip-text hover:text-transparent'}`}
                                        tabIndex={0}
                                        role="menuitem"
=======
                <div className="hidden md:flex items-center space-x-6">
                    <ul className="flex items-center space-x-6">
                        {navLinks.map(({ label, path }) => {
                            const active = location.pathname === path;
                            return (
                                <li key={path}>
                                    <Link
                                        to={path}
                                        aria-current={active ? 'page' : undefined}
                                        className={`capitalize text-base font-medium transition-colors duration-300 relative group ${active ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent' : 'text-slate-600 dark:text-slate-300 hover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-500 hover:to-purple-700 hover:bg-clip-text hover:text-transparent'}`}
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
                                    >
                                        {label}
                                        <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
<<<<<<< HEAD
                <div className="md:hidden flex items-center gap-2 sm:gap-4">
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 ${isMenuOpen ? 'ring-2 ring-cyan-500' : ''}`}
                        tabIndex={0}
                        role="button"
                        aria-pressed={isMenuOpen}
                    >
=======
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
<<<<<<< HEAD
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <ul className="flex flex-col items-center justify-center py-4 bg-gradient-to-b from-cyan-50/95 via-blue-50/95 to-purple-50/95 dark:from-slate-900/95 dark:via-slate-800/95 dark:to-slate-900/95 backdrop-blur-lg">
                    {navLinks.map(({ label, path }) => {
                        const active = location.pathname === path;
                        return (
                            <li key={`${path}-mobile`} className="py-2 w-full">
=======
             <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                 <ul className="flex flex-col items-center justify-center py-4 bg-gradient-to-b from-cyan-50/95 via-blue-50/95 to-purple-50/95 dark:from-slate-900/95 dark:via-slate-800/95 dark:to-slate-900/95 backdrop-blur-lg">
                     {navLinks.map(({ label, path }) => {
                        const active = location.pathname === path;
                        return (
                            <li key={`${path}-mobile`} className="py-2">
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
                                <Link
                                    to={path}
                                    onClick={() => setIsMenuOpen(false)}
                                    aria-current={active ? 'page' : undefined}
<<<<<<< HEAD
                                    aria-label={`Go to ${label}`}
                                    className={`capitalize text-lg font-semibold transition-colors duration-300 block px-4 py-3 rounded-lg ${active ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900/30' : 'text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20'}`}
                                    tabIndex={0}
=======
                                    className={`capitalize text-lg font-semibold transition-colors duration-300 ${active ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400'}`}
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
<<<<<<< HEAD
                </ul>
=======
                 </ul>
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
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
<<<<<<< HEAD
        <section id="hero" className="min-h-[calc(100vh-7rem)] flex items-center justify-center bg-cover bg-center relative overflow-hidden pt-20 sm:pt-24 md:pt-28">
=======
        <section id="hero" className="min-h-[calc(100vh-7rem)] flex items-center justify-center bg-cover bg-center relative overflow-hidden pt-28">
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
            <div
                className="absolute inset-0 bg-white/20 dark:bg-black/60"
                style={{ transform: `translateY(${offsetY * 0.5}px)` }}
            ></div>
            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/10 via-transparent to-blue-900/20 dark:from-black/30 dark:to-blue-900/50"
                style={{ transform: `translateY(${offsetY * 0.4}px)` }}
            ></div>
<<<<<<< HEAD
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 text-slate-900 dark:text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur border border-white/40 dark:border-white/10 shadow-2xl p-4 sm:p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                            {/* Left: Profile image box (circular with thicker gradient border) */}
                            <div className="flex justify-center md:justify-start order-1">
                                <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-violet-500 to-cyan-500 shadow-2xl">
                                    <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden backdrop-blur bg-white/30 dark:bg-white/10">
                                        <img
                                            src="/profile.jpg"
                                            alt="Portrait of Dhoddi Mallikarjuna Reddy, Data Scientist and Electronics Engineer"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            aria-label="Profile image of Dhoddi Mallikarjuna Reddy"
                                            role="img"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right: Intro text and actions */}
                            <div className="text-center md:text-left order-2">
                                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400 animate-[fadeIn_1.2s_ease-in-out]">
                                    Dhoddi Mallikarjuna Reddy
                                </h1>
                                <div className="text-xl sm:text-2xl md:text-4xl font-semibold mb-8 h-12">
                                    <span key={currentTitleIndex} className="animate-[slideUpFadeIn_1s_ease-out]">{titles[currentTitleIndex]}</span>
                                </div>
                                <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 sm:gap-4">
                                    <a href="/Dhoddi_Mallikarjuna_Reddy_CV.pdf" download className="px-6 sm:px-8 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full text-base sm:text-lg font-semibold text-white hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transform transition-all duration-300">
                                        Download CV
                                    </a>
                                    <a href="https://www.linkedin.com/in/dhoddi-mallikarjuna-reddy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 sm:p-3 bg-black/10 dark:bg-white/10 rounded-full hover:bg-cyan-500/50 text-slate-800 dark:text-white hover:text-white transform transition-all duration-300"><LinkedInIcon /></a>
                                    <a href="mailto:dhoddireddy@gmail.com" aria-label="Email" className="p-2 sm:p-3 bg-black/10 dark:bg-white/10 rounded-full hover:bg-violet-500/50 text-slate-800 dark:text-white hover:text-white transform transition-all duration-300"><EmailIcon /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
=======
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
                            <a href="mailto:dhoddireddy@gmail.com" className="p-3 bg-black/10 dark:bg-white/10 rounded-full hover:bg-violet-500/50 text-slate-800 dark:text-white hover:text-white transform transition-all duration-300"><EmailIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
        </section>
    );
};

const About: React.FC = () => {
    const [currentStat, setCurrentStat] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const stats = [
        { number: "12+", label: "AI Projects", icon: "🤖", color: "from-blue-500 to-cyan-500" },
        { number: "8+", label: "IoT Solutions", icon: "🔌", color: "from-green-500 to-emerald-500" },
        { number: "50+", label: "Technologies", icon: "⚡", color: "from-purple-500 to-pink-500" },
        { number: "100%", label: "Innovation", icon: "🚀", color: "from-orange-500 to-red-500" }
    ];

    const achievements = [
        {
            title: "AI Innovation Leader",
            description: "Pioneering advanced AI solutions with cutting-edge machine learning algorithms",
            icon: "🧠",
            gradient: "from-blue-500 via-cyan-500 to-indigo-500"
        },
        {
            title: "IoT Systems Architect",
            description: "Designing intelligent IoT ecosystems with sensor fusion and real-time processing",
            icon: "🏗️",
            gradient: "from-green-500 via-emerald-500 to-teal-500"
        },
        {
            title: "Full-Stack Visionary",
            description: "Building end-to-end solutions from database to deployment with modern tech stacks",
            icon: "💻",
            gradient: "from-purple-500 via-pink-500 to-rose-500"
        },
        {
            title: "Research Pioneer",
            description: "Published research in AI, IoT, and embedded systems with real-world impact",
            icon: "🔬",
            gradient: "from-orange-500 via-red-500 to-yellow-500"
        }
    ];

    const superpowers = [
        {
            title: "Machine Learning Mastery",
            description: "Advanced expertise in neural networks, deep learning, and predictive modeling",
            level: 95,
            icon: "🧠"
        },
        {
            title: "IoT & Embedded Systems",
            description: "Real-time systems, sensor integration, and hardware-software co-design",
            level: 90,
            icon: "🔌"
        },
        {
            title: "Full-Stack Development",
            description: "Modern web technologies, APIs, and scalable application architecture",
            level: 88,
            icon: "⚡"
        },
        {
            title: "Data Science & Analytics",
            description: "Big data processing, statistical analysis, and business intelligence",
            level: 92,
            icon: "📊"
        }
    ];

    const journey = [
        {
            year: "2024",
            title: "AI Revolution",
            description: "Leading AI innovation with advanced machine learning projects and research",
            icon: "🚀"
        },
        {
            year: "2023",
            title: "IoT Specialist",
            description: "Developed multiple IoT solutions and embedded systems for real-world applications",
            icon: "🔧"
        },
        {
            year: "2022",
            title: "Tech Explorer",
            description: "Started journey into data science, web development, and emerging technologies",
            icon: "🎯"
        },
        {
            year: "2021",
            title: "Foundation",
            description: "Built strong fundamentals in electronics, programming, and problem-solving",
            icon: "🏗️"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentStat(prev => (prev + 1) % stats.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('about-hero');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
<<<<<<< HEAD
            <div id="main-content" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">



=======
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
            {/* Hero Section */}
            <div id="about-hero" className="relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>

<<<<<<< HEAD
                <div className="relative container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-20 md:py-24">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
=======
                <div className="relative container mx-auto px-6 py-24">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
                            {/* Left: Profile Image */}
                            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                                <div className="relative">
                                    {/* Main Profile Image */}
                                    <div className="relative p-2 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-2xl">
                                        <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-white/20 dark:bg-white/10 backdrop-blur">
                                            <img
                                                src="/profile.jpg"
<<<<<<< HEAD
                                                alt="Portrait of Dhoddi Mallikarjuna Reddy, Tech Superman, Data Scientist, Electronics Engineer"
                                                className="w-full h-full object-cover"
                                                aria-label="Profile image of Dhoddi Mallikarjuna Reddy"
                                                role="img"
=======
                                                alt="Tech Superman - Dhoddi Mallikarjuna Reddy"
                                                className="w-full h-full object-cover"
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
                                            />
                                        </div>
                                    </div>

                                    {/* Floating Achievement Badges */}
                                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                        <span className="text-2xl">🏆</span>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                        <span className="text-xl">🚀</span>
                                    </div>
                                    <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
                                        <span className="text-lg">⚡</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Hero Content */}
                            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                                <div className="inline-block px-4 py-2 text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mb-6">
                                    🔌 ELECTRONIC TECH SUPERMAN
                                </div>

                                <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                                        DHODDI
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                                        MALLIKARJUNA
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                                        REDDY
                                    </span>
                                </h1>

                                <div className="text-2xl lg:text-3xl font-bold mb-8 h-16 flex items-center">
                                    <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                                        AI • IoT • FULL-STACK ARCHITECT
                                    </span>
                                </div>

                                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl">
                                    A visionary technologist transforming ideas into intelligent solutions.
                                    <span className="font-bold text-blue-600 dark:text-blue-400"> 12+ AI projects</span>,
                                    <span className="font-bold text-green-600 dark:text-green-400"> 8+ IoT systems</span>, and
                                    <span className="font-bold text-purple-600 dark:text-purple-400"> countless innovations</span>
                                    that push the boundaries of what's possible.
                                </p>

                                {/* Animated Stats */}
                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    {stats.map((stat, index) => (
                                        <div
                                            key={index}
                                            className={`p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-slate-200 dark:border-slate-700 transition-all duration-500 ${
                                                currentStat === index ? 'scale-110 shadow-lg' : 'hover:scale-105'
                                            }`}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <div className={`text-2xl ${currentStat === index ? 'animate-bounce' : ''}`}>
                                                    {stat.icon}
                                                </div>
                                                <div>
                                                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                                        {stat.number}
                                                    </div>
                                                    <div className="text-sm text-slate-600 dark:text-slate-400">
                                                        {stat.label}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="/projects"
                                        className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                                    >
                                        <span>Explore My Work</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                        </svg>
                                    </a>
                                    <a
                                        href="mailto:dhoddireddy@gmail.com"
                                        className="px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-bold rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                        <span>Contact Me</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Superpowers Section */}
            <div className="py-24 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-black mb-6">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                                SUPERPOWERS
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                            Master-level expertise across multiple technology domains, enabling me to tackle any challenge
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {superpowers.map((power, index) => (
                            <div
                                key={index}
                                className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="flex items-start space-x-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {power.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {power.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                            {power.description}
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Proficiency</span>
                                                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{power.level}%</span>
                                            </div>
                                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out`}
                                                    style={{ width: `${power.level}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Achievements Section */}
            <div className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-black mb-6">
                            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                ACHIEVEMENTS
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                            Recognized for groundbreaking work in AI, IoT, and technology innovation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className={`group relative p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                                <div className="relative">
                                    <div className="flex items-start space-x-6">
                                        <div className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            {achievement.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {achievement.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Journey Timeline */}
            <div className="py-24 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-black mb-6">
                            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                                TECH JOURNEY
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                            Evolution from curious engineer to AI/IoT innovator and tech leader
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"></div>

                            {journey.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`relative flex items-start space-x-8 mb-12 transition-all duration-700 ${
                                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                                    }`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
                                    {/* Timeline Node */}
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                                            {milestone.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow duration-300">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full">
                                                {milestone.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                                {milestone.title}
                                            </h3>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Statement */}
            <div className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-3xl p-12 border border-slate-200 dark:border-slate-600 shadow-2xl">
                            <h2 className="text-4xl lg:text-5xl font-black mb-8">
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                                    MISSION STATEMENT
                                </span>
                            </h2>
                            <blockquote className="text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                                "To harness the power of artificial intelligence, IoT, and cutting-edge technology to solve real-world problems and create solutions that make a meaningful impact on people's lives."
                            </blockquote>
                            <div className="flex justify-center space-x-8 text-6xl">
                                <span className="animate-bounce" style={{animationDelay: '0s'}}>🤖</span>
                                <span className="animate-bounce" style={{animationDelay: '0.5s'}}>🔌</span>
                                <span className="animate-bounce" style={{animationDelay: '1s'}}>⚡</span>
                                <span className="animate-bounce" style={{animationDelay: '1.5s'}}>🚀</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                            Ready to Build Something Amazing?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Let's collaborate on your next groundbreaking project. From AI innovations to IoT solutions, I'm ready to bring your vision to life.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/projects"
                                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                            >
                                <span>View My Projects</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                </svg>
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <span>Get In Touch</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
    gradient: string;
<<<<<<< HEAD
    features: string[];
=======
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
    link?: string;
}

const Services: React.FC = () => {
    const services: Service[] = [
        {
            title: "Data Analysis",
            description: "Extract valuable insights from your data with advanced analytics and visualization techniques.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            ),
            gradient: "from-blue-500 via-sky-500 to-indigo-500",
            features: ["Data Visualization", "Statistical Analysis", "Business Intelligence", "Custom Dashboards"]
        },
        {
            title: "AI & ML Solutions",
            description: "Build intelligent systems with cutting-edge artificial intelligence and machine learning technologies.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5.04 16.71a9.016 9.016 0 006.2 2.5c1.173 0 2.32-.24 3.384-.708a2.236 2.236 0 002.99-3.32l-3.276-3.276a2.25 2.25 0 01-.66-1.59V3.104c0-.572.227-1.12.633-1.524a2.25 2.25 0 013.18 0l3.401 3.401a2.25 2.25 0 010 3.18l-3.401 3.401a2.25 2.25 0 01-1.524.633h-5.714a2.25 2.25 0 01-1.59-.66l-6.75-6.75a2.25 2.25 0 010-3.18l3.402-3.401a2.25 2.25 0 013.18 0c.403.404.63.952.63 1.524z"></path>
            ),
            gradient: "from-sky-500 via-blue-500 to-indigo-600",
            features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
        },
        {
            title: "Web Development",
            description: "Create responsive, high-performance websites and web applications with modern technologies.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
            ),
            gradient: "from-indigo-500 via-blue-500 to-sky-500",
            features: ["Full-Stack Development", "React & Next.js", "API Integration", "Performance Optimization"]
        },
        {
            title: "Final Year Projects",
            description: "Comprehensive support for students in developing innovative and impactful final year projects.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            ),
            gradient: "from-blue-600 via-indigo-500 to-sky-600",
            features: ["Project Guidance", "Technical Support", "Documentation Help", "Presentation Training"]
        },
        {
            title: "Database & SQL",
            description: "Design, implementation, and optimization of database systems and SQL server solutions.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
            ),
            gradient: "from-sky-600 via-blue-500 to-indigo-600",
            features: ["Database Design", "SQL Optimization", "Data Migration", "Performance Tuning"]
        },
        {
            title: "IoT Solutions",
            description: "Develop smart IoT systems with sensor integration, real-time monitoring, and automation.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
            ),
            gradient: "from-indigo-600 via-sky-500 to-blue-600",
            features: ["Sensor Integration", "Real-time Monitoring", "Edge Computing", "Smart Automation"],
            link: "https://lvtechguides.netlify.app/"
        }
    ];

    const stats = [
        { number: "50+", label: "Projects Completed", icon: "🚀" },
        { number: "98%", label: "Client Satisfaction", icon: "⭐" },
        { number: "24/7", label: "Support Available", icon: "💬" },
        { number: "5+", label: "Years Experience", icon: "⚡" }
    ];

    return (
<<<<<<< HEAD
        <div id="main-content" className="space-y-20">
=======
        <div className="space-y-20">
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
            {/* Hero Section */}
            <AnimatedSection id="services-hero" className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 dark:from-slate-900/50 dark:via-blue-900/30 dark:to-slate-900/50">
                    <svg
                        className="absolute top-0 left-0 w-full h-full opacity-30"
                        viewBox="0 0 1200 600"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="servicesHeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" />
                                <stop offset="30%" stopColor="#1d4ed8" stopOpacity="0.1" />
                                <stop offset="70%" stopColor="#1e40af" stopOpacity="0.08" />
                                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.06" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M0,300 C300,200 600,100 1200,200 L1200,600 L0,600 Z"
                            fill="url(#servicesHeroGradient)"
                        />
                        <path
                            d="M0,400 C400,300 800,200 1200,300 L1200,600 L0,600 Z"
                            fill="url(#servicesHeroGradient)"
                            opacity="0.6"
                        />
                        <path
                            d="M0,500 C500,400 700,300 1200,400 L1200,600 L0,600 Z"
                            fill="url(#servicesHeroGradient)"
                            opacity="0.4"
                        />
                    </svg>
                </div>

                <div className="relative container mx-auto px-6 py-24 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full mb-6">
                            What I Offer
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                                Professional Services
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive technology solutions tailored to transform your ideas into reality.
                            From data insights to intelligent systems, I deliver excellence at every step.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                            >
                                <span>Start Your Project</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                </svg>
                            </a>
                            <a
                                href="/Dhoddi_Mallikarjuna_Reddy_CV.pdf"
                                download
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
                            >
                                <span>Download Portfolio</span>
                            </a>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Stats Section */}
            <AnimatedSection id="services-stats" className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-white dark:bg-slate-800/80 backdrop-blur-lg rounded-xl shadow-lg border border-slate-200/60 dark:border-slate-700/60 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                                {stat.number}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedSection>

            {/* Services Grid */}
            <AnimatedSection id="services-grid" className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        My <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">Expertise</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Specialized services across multiple domains to help you achieve your goals
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative p-0.5 rounded-2xl bg-gradient-to-br ${service.gradient} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                        >
                            <div className="h-full bg-white dark:bg-slate-900/95 backdrop-blur-sm rounded-2xl p-8 flex flex-col">
                                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.gradient} bg-opacity-10 shadow-lg`}>
                                    <svg
                                        className={`w-7 h-7 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {service.icon}
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                                        Key Features:
                                    </h4>
                                    <ul className="space-y-2">
<<<<<<< HEAD
                                        {service.features.map((feature: string, featureIndex: number) => (
=======
                                        {service.features.map((feature, featureIndex) => (
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
                                            <li
                                                key={featureIndex}
                                                className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                                            >
                                                <svg
                                                    className={`w-4 h-4 mr-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent flex-shrink-0`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {service.link ? (
                                    <a
                                        href={service.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center justify-center text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:opacity-90 transition-all duration-300 hover:scale-105`}
                                    >
                                        <span>Learn More</span>
                                        <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-between">
                                        <span className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity`}>
                                            Available Now
                                        </span>
                                        <div className="flex gap-2">
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} animate-pulse`}></div>
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} animate-pulse`} style={{animationDelay: '0.2s'}}></div>
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} animate-pulse`} style={{animationDelay: '0.4s'}}></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedSection>

            {/* Process Section */}
            <AnimatedSection id="services-process" className="bg-slate-50 dark:bg-slate-800/50">
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            My <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">Process</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            A streamlined approach to deliver exceptional results
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                step: "01",
                                title: "Discovery",
                                description: "Understanding your requirements and project goals through detailed consultation",
                                gradient: "from-blue-500 to-sky-500"
                            },
                            {
                                step: "02",
                                title: "Planning",
                                description: "Creating a comprehensive project roadmap with timelines and milestones",
                                gradient: "from-sky-500 to-indigo-500"
                            },
                            {
                                step: "03",
                                title: "Development",
                                description: "Building your solution with regular updates and iterative improvements",
                                gradient: "from-indigo-500 to-blue-600"
                            },
                            {
                                step: "04",
                                title: "Delivery",
                                description: "Final testing, deployment, and ongoing support for your project",
                                gradient: "from-blue-600 to-sky-600"
                            }
                        ].map((process, index) => (
                            <div
                                key={index}
                                className="relative text-center group"
                            >
                                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${process.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {process.step}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    {process.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    {process.description}
                                </p>

                                {/* Connection Line */}
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-sky-200 dark:from-blue-700 dark:to-sky-700 transform translate-x-8">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection id="services-cta" className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 dark:from-slate-900/50 dark:via-blue-900/30 dark:to-slate-900/50 rounded-3xl p-12 border border-blue-200/50 dark:border-blue-700/50">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            Ready to <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">Transform</span> Your Ideas?
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                            Let's discuss your project and explore how we can bring your vision to life with cutting-edge technology and innovative solutions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                            >
                                <span>Start Your Project</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                </svg>
                            </a>
                            <a
                                href="mailto:dhoddireddy@gmail.com"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
                            >
                                <EmailIcon />
                                <span>Email Me</span>
                            </a>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
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

interface ProjectCardProps {
    project: Project;
    index: number;
    onOpen: (p: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpen }) => {
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
            className={`group p-6 rounded-lg bg-white dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 shadow-md dark:shadow-lg flex flex-col h-full transform hover:-translate-y-2 hover:scale-[1.03] ${themeShadowClass} transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} cursor-pointer`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => onOpen(project)}
            role="button"
            tabIndex={0}
            aria-label={`Open details for project ${project.title}`}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(project); } }}
        >
            <div className="relative mb-4">
<<<<<<< HEAD
                <div className={`relative w-full h-48 rounded-md overflow-hidden bg-slate-200 dark:bg-slate-700 ${!imageLoaded ? 'shimmer' : ''}`}> 
                    <img 
                        src={project.image} 
                        alt={`Project: ${project.title}`}
                        className={`w-full h-48 object-cover absolute top-0 left-0 transition-opacity duration-500 transform group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(true)}
                        loading="lazy"
                        aria-label={`Image for project ${project.title}`}
                        role="img"
=======
                <div className={`relative w-full h-48 rounded-md overflow-hidden bg-slate-200 dark:bg-slate-700 ${!imageLoaded ? 'shimmer' : ''}`}>
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className={`w-full h-48 object-cover absolute top-0 left-0 transition-opacity duration-500 transform group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(true)}
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
                    />
                </div>
                {project.funded && fundingBadge(project.funded)}
            </div>
            <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map(skill => (
                        <span key={skill} className="bg-orange-100 dark:bg-orange-900/50 text-orange-500 dark:text-orange-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{skill}</span>
                    ))}
                </div>
<<<<<<< HEAD
                <button 
                    onClick={(e) => { e.stopPropagation(); onOpen(project); }} 
                    className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent font-semibold hover:underline mt-auto inline-flex items-center gap-1"
                    aria-label={`Learn more about ${project.title}`}
                    tabIndex={0}
                >
                    Learn More &rarr;
                </button>
=======
                <button onClick={(e) => { e.stopPropagation(); onOpen(project); }} className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent font-semibold hover:underline mt-auto inline-flex items-center gap-1">Learn More &rarr;</button>
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [sortBy, setSortBy] = useState<'date' | 'name' | 'category'>('date');

    // Get unique categories from projects
    const categories = ['All', ...Array.from(new Set(PROJECTS.flatMap(p => p.skills)))].sort();

    // Filter and sort projects
    const filteredAndSortedProjects = React.useMemo(() => {
        let filtered = PROJECTS.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 project.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesCategory = selectedCategory === 'All' || project.skills.includes(selectedCategory);
            return matchesSearch && matchesCategory;
        });

        // Sort projects
        switch (sortBy) {
            case 'name':
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'category':
                filtered.sort((a, b) => a.skills[0]?.localeCompare(b.skills[0] || '') || 0);
                break;
            case 'date':
            default:
                // Assuming projects are already in chronological order
                break;
        }

        return filtered;
    }, [searchTerm, selectedCategory, sortBy]);

    // Preload images for smooth transitions
    useEffect(() => {
        PROJECTS.forEach((project, index) => {
            const img = new Image();
            img.onload = () => {
                setImageLoaded(prev => ({ ...prev, [index]: true }));
            };
            img.src = project.image;
        });
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (showModal) {
                if (e.key === 'Escape') {
                    setShowModal(false);
                }
                return;
            }

            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    if (activeProjectIndex > 0) setActiveProjectIndex(prev => prev - 1);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    if (activeProjectIndex < filteredAndSortedProjects.length - 1) setActiveProjectIndex(prev => prev + 1);
                    break;
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    handleProjectClick(filteredAndSortedProjects[activeProjectIndex]);
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [activeProjectIndex, showModal, filteredAndSortedProjects]);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedCategory('All');
    };

    const getProjectCategoryColor = (skills: string[]) => {
        // Material Design color mapping based on technology
        const techColors: Record<string, string> = {
            'React': 'bg-blue-500',
            'TypeScript': 'bg-blue-600',
            'Node.js': 'bg-green-500',
            'Python': 'bg-yellow-500',
            'Machine Learning': 'bg-purple-500',
            'AI': 'bg-indigo-500',
            'IoT': 'bg-orange-500',
            'Web': 'bg-cyan-500',
            'Mobile': 'bg-pink-500'
        };

        const primarySkill = skills[0];
        return techColors[primarySkill] || 'bg-gray-500';
    };

    return (
<<<<<<< HEAD
        <div id="main-content" className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-orange-900/30 dark:to-purple-900/30">
=======
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-orange-900/30 dark:to-purple-900/30">
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
            {/* Material Design App Bar */}
            <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-orange-200 dark:border-orange-700 shadow-sm">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-8">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Projects</h1>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Portfolio Showcase</p>
                                </div>
                            </div>

                            {/* Search Bar */}
                            <div className="relative hidden md:block">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="block w-80 pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>
                        </div>

                        {/* View Controls */}
                        <div className="flex items-center space-x-4">
                            {/* Sort Dropdown */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'date' | 'name' | 'category')}
                                className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
                            >
                                <option value="date">Sort by Date</option>
                                <option value="name">Sort by Name</option>
                                <option value="category">Sort by Category</option>
                            </select>

                            {/* View Toggle */}
                            <div className="flex rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                                        viewMode === 'grid'
                                            ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-sm'
                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                                        viewMode === 'list'
                                            ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-sm'
                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Search */}
                    <div className="mt-4 md:hidden">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
<<<<<<< HEAD
            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
=======
            <div className="container mx-auto px-6 py-8">
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
                {/* Filters and Stats */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                        {/* Category Filter */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category === 'All' ? 'All Categories' : category}
                                </option>
                            ))}
                        </select>

                        {/* Clear Filters */}
                        {(searchTerm || selectedCategory !== 'All') && (
                            <button
                                onClick={resetFilters}
                                className="px-4 py-2 bg-gradient-to-r from-orange-100 to-purple-100 dark:from-orange-900/50 dark:to-purple-900/50 text-orange-700 dark:text-orange-300 rounded-lg hover:from-orange-200 hover:to-purple-200 dark:hover:from-orange-800/70 dark:hover:to-purple-800/70 transition-all duration-200"
                            >
                                Clear Filters
                            </button>
                        )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-400">
                        <span>{filteredAndSortedProjects.length} projects</span>
                        <span>•</span>
                        <span>{categories.length - 1} technologies</span>
                    </div>
                </div>

                {/* Projects Grid/List */}
                {filteredAndSortedProjects.length > 0 ? (
                    <div className={`transition-all duration-300 ${
                        viewMode === 'grid'
                            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                            : 'space-y-4'
                    }`}>
                        {filteredAndSortedProjects.map((project, index) => (
                            <div
                                key={project.title}
                                className={`group relative bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                                    viewMode === 'grid'
                                        ? 'overflow-hidden border border-slate-200 dark:border-slate-700'
                                        : 'border border-slate-200 dark:border-slate-700 p-6'
                                }`}
                                onClick={() => handleProjectClick(project)}
                            >
                                {viewMode === 'grid' ? (
                                    // Grid Card Layout
                                    <>
                                        {/* Project Image */}
                                        <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 overflow-hidden">
                                            {!imageLoaded[index] && (
                                                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse"></div>
                                            )}
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                                                    imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                                                }`}
                                                onLoad={() => setImageLoaded(prev => ({ ...prev, [index]: true }))}
                                            />

                                            {/* Overlay Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            {/* Status Badge */}
                                            {project.funded && (
                                                <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full shadow-lg">
                                                    <svg className="w-3 h-3 mr-1 inline" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                    </svg>
                                                    Funded
                                                </div>
                                            )}

                                            {/* Quick Actions */}
                                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button className="w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors duration-200">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Project Info */}
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200">
                                                    {project.title}
                                                </h3>
                                                <div className={`w-3 h-3 rounded-full ${getProjectCategoryColor(project.skills)}`}></div>
                                            </div>

                                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                                                {project.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.skills.slice(0, 3).map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-medium rounded-md"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                                {project.skills.length > 3 && (
                                                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-md">
                                                        +{project.skills.length - 3}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Action Button */}
                                            <button className="w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                                                <span>View Details</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    // List Layout
                                    <div className="flex items-center space-x-6">
                                        {/* Project Image */}
                                        <div className="relative w-24 h-24 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg overflow-hidden flex-shrink-0">
                                            <img
                                                src={project.image}
<<<<<<< HEAD
                                                alt={`Project: ${project.title}`}
                                                className="w-full h-full object-cover"
                                                aria-label={`Image for project ${project.title}`}
                                                role="img"
=======
                                                alt={project.title}
                                                className="w-full h-full object-cover"
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
                                            />
                                        </div>

                                        {/* Project Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200 truncate">
                                                    {project.title}
                                                </h3>
                                                {project.funded && (
                                                    <div className="flex items-center space-x-1 px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full ml-2 flex-shrink-0">
                                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                        </svg>
                                                        <span>Funded</span>
                                                    </div>
                                                )}
                                            </div>

                                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 line-clamp-1">
                                                {project.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-1">
                                                {project.skills.map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-medium rounded"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Button */}
                                        <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white font-medium rounded-lg transition-colors duration-200 flex-shrink-0">
                                            View
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    // Empty State
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-purple-100 dark:from-orange-900/50 dark:to-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No projects found</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={resetFilters}
                            className="px-6 py-2 bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white font-medium rounded-lg transition-colors duration-200"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {/* Load More Button (if needed) */}
                {filteredAndSortedProjects.length > 12 && (
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 bg-gradient-to-r from-orange-100 to-purple-100 dark:from-orange-900/50 dark:to-purple-900/50 hover:from-orange-200 hover:to-purple-200 dark:hover:from-orange-800/70 dark:hover:to-purple-800/70 text-orange-700 dark:text-orange-300 font-medium rounded-lg transition-colors duration-200">
                            Load More Projects
                        </button>
                    </div>
                )}
            </div>

            {/* Floating Action Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                </svg>
            </button>

            {/* Project Detail Modal */}
            {showModal && selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="max-w-4xl w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
                        <div className="relative">
                            {/* Modal Header */}
                            <div className="relative h-64 bg-gradient-to-br from-orange-200 to-purple-300 dark:from-orange-700 dark:to-purple-600">
                                <img
                                    src={selectedProject.image}
<<<<<<< HEAD
                                    alt={`Project: ${selectedProject.title}`}
                                    className="w-full h-full object-cover"
                                    aria-label={`Image for project ${selectedProject.title}`}
                                    role="img"
=======
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                {/* Close Button */}
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="absolute top-4 right-4 w-10 h-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-all duration-300 flex items-center justify-center"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>

                                <div className="absolute bottom-6 left-6 right-6">
                                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                    <div className="flex items-center space-x-3">
                                        {selectedProject.funded && (
                                            <div className="flex items-center space-x-2 px-3 py-1 bg-emerald-500 text-white text-sm font-medium rounded-full">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                </svg>
                                                <span>Funded Project</span>
                                            </div>
                                        )}
                                        <div className={`w-3 h-3 rounded-full ${getProjectCategoryColor(selectedProject.skills)}`}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Main Content */}
                                    <div className="lg:col-span-2 space-y-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h3>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {selectedProject.description}
                                            </p>
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Technologies Used</h4>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {selectedProject.skills.map((skill, skillIndex) => (
                                                    <div
                                                        key={skillIndex}
                                                        className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800"
                                                    >
                                                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                                            <span className="text-white font-bold text-sm">
                                                                {skill.charAt(0)}
                                                            </span>
                                                        </div>
                                                        <span className="font-medium text-slate-900 dark:text-white">
                                                            {skill}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div>
                                            <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Key Features</h4>
                                            <div className="grid gap-3">
                                                {[
                                                    'Innovative problem-solving approach',
                                                    'Scalable and performant architecture',
                                                    'User-centered design principles',
                                                    'Modern development practices'
                                                ].map((feature, index) => (
                                                    <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                                                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex-shrink-0"></div>
                                                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sidebar */}
                                    <div className="space-y-6">
                                        {/* Project Stats */}
                                        <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700/50 shadow-md dark:shadow-lg">
                                            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Project Details</h4>
                                            <div className="space-y-4">
                                                <div className="flex justify-between">
                                                    <span className="text-slate-600 dark:text-slate-400">Status</span>
                                                    <span className="font-medium text-emerald-600 dark:text-emerald-400">Completed</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-600 dark:text-slate-400">Category</span>
                                                    <span className="font-medium text-slate-900 dark:text-white">
                                                        {getProjectTheme(selectedProject.skills)}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-600 dark:text-slate-400">Technologies</span>
                                                    <span className="font-medium text-slate-900 dark:text-white">
                                                        {selectedProject.skills.length}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-col space-y-3">
                                            <a
                                                href="#contact"
                                                className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white font-medium rounded-lg transition-colors duration-200 text-center"
                                            >
                                                Discuss This Project
                                            </a>
                                            <button
                                                onClick={() => setShowModal(false)}
                                                className="w-full py-3 px-4 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const Experience: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const experienceHighlights = [
        {
            title: "🚀 Professional Growth",
            value: "6 Months",
            description: "Continuous learning and professional development"
        },
        {
            title: "🔧 Technical Skills",
            value: "15+ Technologies",
            description: "Mastery across multiple tech domains"
        },
        {
            title: "💼 Industry Experience",
            value: "Multiple Sectors",
            description: "Diverse experience across different industries"
        },
        {
            title: "🏆 Project Success",
            value: "100% Delivery",
            description: "Consistent project completion and client satisfaction"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % experienceHighlights.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('experience-hero');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            {/* Hero Section */}
            <div id="experience-hero" className="relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>

                <div className="relative container mx-auto px-6 py-24">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="inline-block px-4 py-2 text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mb-6">
                                💼 PROFESSIONAL JOURNEY
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                                    EXPERIENCE
                                </span>
                            </h1>

                            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                                A journey of continuous growth, innovation, and professional excellence across multiple technology domains and industry sectors.
                            </p>

                            {/* Experience Highlights */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                                {experienceHighlights.map((highlight, index) => (
                                    <div
                                        key={index}
                                        className={`p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-slate-200 dark:border-slate-700 transition-all duration-500 ${
                                            activeIndex === index ? 'scale-110 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50' : 'hover:scale-105'
                                        }`}
                                    >
                                        <div className="text-center">
                                            <div className={`text-3xl mb-3 ${activeIndex === index ? 'animate-bounce' : ''}`}>
                                                {highlight.title.split(' ')[0]}
                                            </div>
                                            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                                {highlight.value}
                                            </div>
                                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                                {highlight.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Professional Timeline */}
            <div className="py-24 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-black mb-6">
                                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    CAREER TIMELINE
                                </span>
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                                Key milestones and professional experiences that shaped my technical expertise
                            </p>
                        </div>

                        <div className="relative">
                            {/* Enhanced Timeline Line */}
                            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full shadow-lg"></div>

                            {EXPERIENCES.map((exp, index) => {
                                const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3, triggerOnce: true });
                                const isLeft = index % 2 === 0;

                                return (
                                    <div
                                        key={index}
                                        ref={ref}
                                        className={`relative flex items-center mb-16 transition-all duration-1000 ${
                                            isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isLeft ? '-translate-x-20' : 'translate-x-20'}`
                                        }`}
                                        style={{ transitionDelay: `${index * 200}ms` }}
                                    >
                                        {/* Timeline Node */}
                                        <div className="relative z-10 flex-shrink-0">
                                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-transform duration-300">
                                                {index === 0 ? '🎯' : index === 1 ? '🔧' : index === 2 ? '⚡' : '🚀'}
                                            </div>
                                        </div>

                                        {/* Content Card */}
                                        <div className={`ml-8 lg:ml-0 flex-1 ${isLeft ? 'lg:mr-8' : 'lg:ml-8'}`}>
                                            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                                {/* Gradient Overlay */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${isLeft ? 'from-blue-500/10 to-purple-500/10' : 'from-purple-500/10 to-pink-500/10'} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />

                                                <div className="relative">
                                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                                        <div className="flex items-center space-x-3 mb-2 lg:mb-0">
                                                            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full">
                                                                {exp.duration}
                                                            </span>
                                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                                {exp.role}
                                                            </h3>
                                                        </div>
                                                        <div className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                                                            {exp.company}
                                                        </div>
                                                    </div>

                                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                                        {exp.description}
                                                    </p>

                                                    {/* Skills Tags */}
                                                    <div className="flex flex-wrap gap-2">
                                                        {index === 0 && ['Web Development', 'Industry Practices', 'Team Collaboration'].map((skill, skillIndex) => (
                                                            <span key={skillIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                        {index === 1 && ['IoT', 'Sensor Integration', 'Data Communication'].map((skill, skillIndex) => (
                                                            <span key={skillIndex} className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-sm rounded-full">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                        {index === 2 && ['PCB Design', 'Hardware Prototyping', 'Electronic Design'].map((skill, skillIndex) => (
                                                            <span key={skillIndex} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-sm rounded-full">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                        {index === 3 && ['API Security', 'IoT Systems', 'Secure Communication'].map((skill, skillIndex) => (
                                                            <span key={skillIndex} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Connection Line */}
                                        <div className={`hidden lg:block absolute top-8 w-8 h-0.5 bg-gradient-to-r ${isLeft ? 'left-full from-blue-300 to-purple-300' : 'right-full from-purple-300 to-blue-300'} transform ${isLeft ? 'translate-x-0' : '-translate-x-full'}`}></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Progression */}
            <div className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-black mb-6">
                                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                                    SKILLS EVOLUTION
                                </span>
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                                How my technical expertise has grown and diversified over time
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {[
                                {
                                    period: "2021-2022",
                                    title: "Foundation Building",
                                    description: "Started with core electronics and programming fundamentals",
                                    skills: ["C/C++", "Basic Electronics", "Circuit Design", "Problem Solving"],
                                    icon: "🏗️",
                                    gradient: "from-blue-500 to-cyan-500"
                                },
                                {
                                    period: "2022-2023",
                                    title: "IoT & Embedded Focus",
                                    description: "Deep dive into IoT systems and embedded development",
                                    skills: ["Arduino", "IoT Protocols", "Sensor Integration", "Real-time Systems"],
                                    icon: "🔌",
                                    gradient: "from-green-500 to-emerald-500"
                                },
                                {
                                    period: "2023-2024",
                                    title: "Full-Stack Development",
                                    description: "Expanded into web development and data science",
                                    skills: ["Python", "Web Development", "Data Analysis", "Machine Learning"],
                                    icon: "💻",
                                    gradient: "from-purple-500 to-pink-500"
                                },
                                {
                                    period: "2024-Present",
                                    title: "AI & Advanced Tech",
                                    description: "Specialization in AI, ML, and cutting-edge technologies",
                                    skills: ["Deep Learning", "AI/ML", "Advanced IoT", "System Architecture"],
                                    icon: "🚀",
                                    gradient: "from-orange-500 to-red-500"
                                }
                            ].map((phase, index) => (
                                <div
                                    key={index}
                                    className="group relative p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

                                    <div className="relative">
                                        <div className="flex items-start space-x-6">
                                            <div className={`w-16 h-16 bg-gradient-to-r ${phase.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                {phase.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full">
                                                        {phase.period}
                                                    </span>
                                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                        {phase.title}
                                                    </h3>
                                                </div>
                                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                                    {phase.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {phase.skills.map((skill, skillIndex) => (
                                                        <span key={skillIndex} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Professional Stats */}
            <div className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                            Professional Impact
                        </h2>
                        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                            Quantified achievements and contributions throughout my professional journey
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    number: "15+",
                                    label: "Technologies Mastered",
                                    description: "From embedded systems to AI/ML frameworks"
                                },
                                {
                                    number: "8+",
                                    label: "Professional Projects",
                                    description: "Real-world implementations across industries"
                                },
                                {
                                    number: "100%",
                                    label: "Project Success Rate",
                                    description: "Consistent delivery and client satisfaction"
                                }
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="text-4xl lg:text-5xl font-black text-white mb-3">
                                        {stat.number}
                                    </div>
                                    <div className="text-xl font-bold text-blue-100 mb-2">
                                        {stat.label}
                                    </div>
                                    <div className="text-blue-200">
                                        {stat.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-24 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            Ready to <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">Collaborate?</span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                            Let's discuss how my experience and expertise can contribute to your next project.
                            I'm always excited to take on new challenges and create innovative solutions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/projects"
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                            >
                                <span>View My Work</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                </svg>
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-bold rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <span>Get In Touch</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Error Boundary for Skills Component
interface SkillsErrorBoundaryProps {
    children: React.ReactNode;
}

interface SkillsErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class SkillsErrorBoundary extends React.Component<SkillsErrorBoundaryProps, SkillsErrorBoundaryState> {
    constructor(props: SkillsErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }

    static getDerivedStateFromError(error: Error): SkillsErrorBoundaryState {
        return { 
            hasError: true,
            error 
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Skills component error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                                Oops! Something went wrong while loading skills.
                            </h3>
                            <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                                {this.state.error?.message || 'An unknown error occurred'}
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="mt-2 text-sm text-red-700 dark:text-red-300 underline focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded px-2 py-1"
                            >
                                Try again
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}


const Achievements: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const achievements = [
        // Leadership & Organization
        {
            id: 'ieee-chair',
            category: 'leadership',
            title: 'IEEE Student Branch Chair',
            description: 'Led technical society, organized workshops, seminars, and networking events for engineering students. Mentored teams and drove innovation initiatives.',
            icon: '👑',
            gradient: 'from-yellow-500 to-orange-500',
            tags: ['Leadership', 'Event Management', 'Team Mentoring', 'Innovation'],
            year: '2023-2024'
        },
        {
            id: 'protech-founder',
            category: 'leadership',
            title: 'Founder - ProTech Innovators',
            description: 'Established a final-year project consultancy for engineering students, guiding them in building impactful solutions and providing technical mentorship.',
            icon: '🚀',
            gradient: 'from-blue-500 to-purple-500',
            tags: ['Entrepreneurship', 'Consultancy', 'Mentorship', 'Project Guidance'],
            year: '2024-2025'
        },
        {
            id: 'build-connections',
            category: 'leadership',
            title: 'Build Connections Initiative',
            description: 'Founded and organized networking events to connect students and professionals, fostering collaboration and growth opportunities.',
            icon: '🤝',
            gradient: 'from-green-500 to-teal-500',
            tags: ['Networking', 'Event Planning', 'Community Building', 'Professional Development'],
            year: '2024'
        },
        {
            id: 'dmkr-developments',
            category: 'leadership',
            title: 'Founder - DMKR Developments',
            description: 'Established a platform for creating independent AI tools and projects, focusing on self-reliant AI development and structured learning pipelines.',
            icon: '💡',
            gradient: 'from-indigo-500 to-pink-500',
            tags: ['AI Development', 'Platform Building', 'Independent Projects', 'Innovation'],
            year: '2024-Present'
        },

        // Technical Projects
        {
            id: 'msme-ventilator',
            category: 'technical',
            title: 'MSME-Funded Ventilator Project',
            description: 'Contributed to development of a critical care ventilator, gaining government backing and recognition for innovation in healthcare technology.',
            icon: '🫁',
            gradient: 'from-red-500 to-pink-500',
            tags: ['Healthcare Tech', 'Government Funding', 'Critical Care', 'Medical Innovation'],
            year: '2024'
        },
        {
            id: 'kscst-agro-robo',
            category: 'technical',
            title: 'KSCST-Funded Agro Robo',
            description: 'Developed an agricultural robot with sensor fusion technology for precision farming and crop monitoring applications.',
            icon: '🚜',
            gradient: 'from-green-500 to-emerald-500',
            tags: ['Agriculture Tech', 'Robotics', 'Sensor Fusion', 'Precision Farming'],
            year: '2024'
        },
        {
            id: 'smart-gloves',
            category: 'technical',
            title: 'Smart Gloves for Sign Language',
            description: 'Created assistive technology for sign language translation using advanced sensor integration and machine learning algorithms.',
            icon: '🤲',
            gradient: 'from-blue-500 to-cyan-500',
            tags: ['Assistive Tech', 'Machine Learning', 'Sensor Integration', 'Accessibility'],
            year: '2023'
        },
        {
            id: 'data-scraping',
            category: 'technical',
            title: 'Advanced Data Scraping Solutions',
            description: 'Developed sophisticated data scraping tools and automation solutions for business intelligence and market research.',
            icon: '📊',
            gradient: 'from-purple-500 to-violet-500',
            tags: ['Data Engineering', 'Automation', 'Business Intelligence', 'Web Scraping'],
            year: '2023'
        },
        {
            id: 'ai-projects',
            category: 'technical',
            title: 'AI Development Portfolio',
            description: 'Built comprehensive AI tools including NeuroBabu AI (emotion detection), DatabasE Guru AI, and NovaMind AI chatbot with advanced features.',
            icon: '🤖',
            gradient: 'from-orange-500 to-red-500',
            tags: ['Artificial Intelligence', 'Chatbot Development', 'Database Systems', 'Advanced AI'],
            year: '2024-Present'
        },
        {
            id: 'research-projects',
            category: 'technical',
            title: '8+ Real-World Research Projects',
            description: 'Completed multiple research projects in IoT, embedded systems, electronics, and data science with practical applications and industry relevance.',
            icon: '🔬',
            gradient: 'from-teal-500 to-blue-500',
            tags: ['Research', 'IoT Systems', 'Embedded Development', 'Data Science'],
            year: '2021-2025'
        },

        // Academic Achievements
        {
            id: 'academic-excellence',
            category: 'academic',
            title: 'Academic Excellence Track Record',
            description: 'Maintained exceptional academic performance: 9.8 CGPA (School), 70.6% (Intermediate), 7.7 CGPA (Engineering) with consistent high achievement.',
            icon: '🎓',
            gradient: 'from-yellow-500 to-amber-500',
            tags: ['Academic Excellence', 'High Performance', 'Consistent Achievement', 'Merit Recognition'],
            year: '2018-2025'
        },
        {
            id: 'certifications',
            category: 'academic',
            title: 'Data Science Specialization',
            description: 'Completed comprehensive Data Science roadmap including Python, SQL, Statistics, Machine Learning, and Deep Learning certifications.',
            icon: '📚',
            gradient: 'from-indigo-500 to-blue-500',
            tags: ['Data Science', 'Machine Learning', 'Python', 'Deep Learning', 'Statistics'],
            year: '2023-2024'
        },
        {
            id: 'kscst-recognition',
            category: 'academic',
            title: 'KSCST Project Recognition',
            description: 'Selected for funding for sensor fusion-based hand movement analysis project, highlighting innovation in assistive technology research.',
            icon: '🏆',
            gradient: 'from-green-500 to-blue-500',
            tags: ['Research Funding', 'Innovation Award', 'Assistive Technology', 'Academic Recognition'],
            year: '2024'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('achievements-hero');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/30 dark:to-indigo-900/30">
            {/* Modern Hero Section */}
            <div id="achievements-hero" className="relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full filter blur-3xl"></div>
                </div>

                <div className="relative container mx-auto px-6 py-32">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            {/* Achievement Badge */}
                            <div className="inline-flex items-center px-6 py-3 text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full mb-8 shadow-lg">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                                </svg>
                                ACHIEVEMENT SHOWCASE
                            </div>

                            {/* Main Title */}
                            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight">
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    ACHIEVEMENTS
                                </span>
                            </h1>

                            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-16 max-w-5xl mx-auto leading-relaxed font-medium">
                                A comprehensive showcase of leadership excellence, technical innovation, academic brilliance, and career milestones that define my journey as a technology innovator and industry leader.
                            </p>

                            {/* Achievement Statistics */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                                {[
                                    {
                                        value: '15+',
                                        label: 'Total Achievements',
                                        icon: '🏆',
                                        color: 'from-blue-500 to-indigo-500'
                                    },
                                    {
                                        value: '4',
                                        label: 'Leadership Roles',
                                        icon: '👑',
                                        color: 'from-purple-500 to-pink-500'
                                    },
                                    {
                                        value: '8+',
                                        label: 'Technical Projects',
                                        icon: '🔬',
                                        color: 'from-green-500 to-emerald-500'
                                    },
                                    {
                                        value: '100%',
                                        label: 'Success Rate',
                                        icon: '⭐',
                                        color: 'from-yellow-500 to-orange-500'
                                    }
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-slate-200 dark:border-slate-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                                    >
                                        {/* Background Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />

                                        <div className="relative text-center">
                                            <div className="text-4xl mb-4">{stat.icon}</div>
                                            <div className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                                                {stat.value}
                                            </div>
                                            <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievements Grid */}
            <div className="py-24 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-6xl font-black mb-6">
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    ALL ACHIEVEMENTS
                                </span>
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                                Explore my comprehensive collection of achievements across leadership, technical innovation, academic excellence, and career milestones
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {achievements.map((achievement, index) => {
                                const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3, triggerOnce: true });

                                return (
                                    <div
                                        key={achievement.id}
                                        ref={ref}
                                        className={`group relative transition-all duration-1000 ${
                                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                        }`}
                                        style={{ transitionDelay: `${index * 150}ms` }}
                                    >
                                        <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                                            {/* Gradient Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />

                                            <div className="relative">
                                                {/* Header */}
                                                <div className="flex items-start justify-between mb-6">
                                                    <div className="flex items-center space-x-4">
                                                        <div className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                            {achievement.icon}
                                                        </div>
                                                        <div>
                                                            <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full">
                                                                {achievement.year}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="mb-6">
                                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                        {achievement.title}
                                                    </h3>
                                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                                        {achievement.description}
                                                    </p>
                                                </div>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2">
                                                    {achievement.tags.map((tag, tagIndex) => (
                                                        <span
                                                            key={tagIndex}
                                                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievement Categories Breakdown */}
            <div className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-6xl font-black mb-6">
                                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    BREAKDOWN BY CATEGORY
                                </span>
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                                Detailed categorization showcasing achievements across different professional domains
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Leadership & Organization",
                                    icon: "👑",
                                    gradient: "from-yellow-500 to-orange-500",
                                    bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
                                    borderColor: "border-yellow-200 dark:border-yellow-800",
                                    achievements: [
                                        "IEEE Student Branch Chair - Organized technical events and mentored teams",
                                        "ProTech Innovators Founder - Project consultancy for engineering students",
                                        "Build Connections Initiative - Networking events for professionals",
                                        "DMKR Developments Founder - AI tools and independent projects platform"
                                    ],
                                    count: 4
                                },
                                {
                                    title: "Technical Excellence",
                                    icon: "🔬",
                                    gradient: "from-blue-500 to-cyan-500",
                                    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
                                    borderColor: "border-blue-200 dark:border-blue-800",
                                    achievements: [
                                        "MSME-Funded Ventilator Project - Critical care healthcare technology",
                                        "KSCST-Funded Agro Robo - Precision farming with sensor fusion",
                                        "Smart Gloves for Sign Language - Assistive technology innovation",
                                        "AI Development Portfolio - NeuroBabu, DatabasE Guru, NovaMind AI"
                                    ],
                                    count: 6
                                },
                                {
                                    title: "Academic Recognition",
                                    icon: "🎓",
                                    gradient: "from-green-500 to-emerald-500",
                                    bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
                                    borderColor: "border-green-200 dark:border-green-800",
                                    achievements: [
                                        "9.8 CGPA (School) - Exceptional secondary education performance",
                                        "70.6% (Intermediate) - Strong foundation in science and mathematics",
                                        "7.7 CGPA (Engineering) - Consistent excellence in technical education",
                                        "Data Science Specialization - Comprehensive ML/DL certification track"
                                    ],
                                    count: 3
                                },
                                {
                                    title: "Career Milestones",
                                    icon: "💼",
                                    gradient: "from-purple-500 to-pink-500",
                                    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
                                    borderColor: "border-purple-200 dark:border-purple-800",
                                    achievements: [
                                        "Kyndryl Placement (2025) - Infrastructure Services Support role",
                                        "Lumos Learning Shortlist - Customer Success Associate position",
                                        "Industry Internships - IBM, Wadhwani, Interleap exposure",
                                        "Professional Recognition - Multiple shortlists and offers"
                                    ],
                                    count: 2
                                }
                            ].map((category, index) => (
                                <div
                                    key={index}
                                    className={`group relative p-8 rounded-3xl bg-gradient-to-br ${category.bgGradient} border ${category.borderColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />

                                    <div className="relative">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                {category.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {category.title}
                                                </h3>
                                                <div className="text-sm text-slate-500 dark:text-slate-400">
                                                    {category.count} Achievements
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            {category.achievements.map((achievement, achievementIndex) => (
                                                <div key={achievementIndex} className="flex items-start space-x-3">
                                                    <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full flex-shrink-0 mt-2`}></div>
                                                    <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                                        {achievement}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievement Impact Section */}
            <div className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
                            Achievement Impact
                        </h2>
                        <p className="text-xl text-blue-100 mb-16 max-w-4xl mx-auto">
                            Quantified achievements and contributions across different domains of professional excellence
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                {
                                    number: "15+",
                                    label: "Total Achievements",
                                    description: "Comprehensive portfolio across all domains"
                                },
                                {
                                    number: "4",
                                    label: "Leadership Positions",
                                    description: "IEEE Chair, Founder roles, and initiatives"
                                },
                                {
                                    number: "8+",
                                    label: "Funded Projects",
                                    description: "MSME, KSCST, and research project funding"
                                },
                                {
                                    number: "100%",
                                    label: "Success Rate",
                                    description: "Consistent delivery and achievement recognition"
                                }
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="text-5xl lg:text-6xl font-black text-white mb-3">
                                        {stat.number}
                                    </div>
                                    <div className="text-xl font-bold text-blue-100 mb-2">
                                        {stat.label}
                                    </div>
                                    <div className="text-blue-200">
                                        {stat.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6">
                            Ready to <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Achieve More?</span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
                            My comprehensive track record demonstrates my commitment to excellence across leadership, technical innovation, academic achievement, and professional growth. Let's collaborate to create something extraordinary.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a
                                href="/projects"
                                className="px-10 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                            >
                                <span>View My Projects</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                </svg>
                            </a>
                            <a
                                href="/contact"
                                className="px-10 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-bold rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <span>Discuss Collaboration</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EducationTimeline: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const educationHighlights = [
        {
            title: "🎓 Academic Excellence",
            value: "7.8+ GPA",
            description: "Consistent high performance throughout education"
        },
        {
            title: "🔬 Research Focus",
            value: "ECE Engineering",
            description: "Specialized in Electronics & Communication"
        },
        {
            title: "🏆 Leadership",
            value: "IEEE SB Chair",
            description: "Led technical society and organized events"
        },
        {
            title: "🚀 Innovation",
            value: "Project-Based",
            description: "Hands-on experience with real-world applications"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % educationHighlights.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('education-hero');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 dark:from-slate-900 dark:via-green-900/30 dark:to-blue-900/30">
            {/* Hero Section */}
            <div id="education-hero" className="relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>

                <div className="relative container mx-auto px-6 py-24">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="inline-block px-4 py-2 text-sm font-bold bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full mb-6">
                                🎓 ACADEMIC JOURNEY
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    EDUCATION
                                </span>
                            </h1>

                            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                                A foundation built on academic excellence, technical expertise, and leadership that shaped my journey as a technology innovator.
                            </p>

                            {/* Education Highlights */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                                {educationHighlights.map((highlight, index) => (
                                    <div
                                        key={index}
                                        className={`p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-slate-200 dark:border-slate-700 transition-all duration-500 ${
                                            activeIndex === index ? 'scale-110 shadow-2xl bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/50 dark:to-blue-900/50' : 'hover:scale-105'
                                        }`}
                                    >
                                        <div className="text-center">
                                            <div className={`text-3xl mb-3 ${activeIndex === index ? 'animate-bounce' : ''}`}>
                                                {highlight.title.split(' ')[0]}
                                            </div>
                                            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                                                {highlight.value}
                                            </div>
                                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                                {highlight.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Academic Timeline */}
            <div className="py-24 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-black mb-6">
                                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    ACADEMIC TIMELINE
                                </span>
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                                Key milestones and achievements that built my technical foundation
                            </p>
                        </div>

                        <div className="relative">
                            {/* Enhanced Timeline Line */}
                            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-green-500 via-blue-500 to-indigo-500 rounded-full shadow-lg"></div>

                            {EDUCATION.map((edu, index) => {
                                const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3, triggerOnce: true });
                                const isLeft = index % 2 === 0;

                                return (
                                    <div
                                        key={index}
                                        ref={ref}
                                        className={`relative flex items-center mb-16 transition-all duration-1000 ${
                                            isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isLeft ? '-translate-x-20' : 'translate-x-20'}`
                                        }`}
                                        style={{ transitionDelay: `${index * 200}ms` }}
                                    >
                                        {/* Timeline Node */}
                                        <div className="relative z-10 flex-shrink-0">
                                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-transform duration-300">
                                                {index === 0 ? '🎓' : index === 1 ? '📚' : '🏫'}
                                            </div>
                                        </div>

                                        {/* Content Card */}
                                        <div className={`ml-8 lg:ml-0 flex-1 ${isLeft ? 'lg:mr-8' : 'lg:ml-8'}`}>
                                            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                                {/* Gradient Overlay */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${isLeft ? 'from-green-500/10 to-blue-500/10' : 'from-blue-500/10 to-indigo-500/10'} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />

                                                <div className="relative">
                                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                                        <div className="flex items-center space-x-3 mb-2 lg:mb-0">
                                                            <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-bold rounded-full">
                                                                {edu.period}
                                                            </span>
                                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                                                {edu.degree}
                                                            </h3>
                                                        </div>
                                                        <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                                            {edu.institution}
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between mb-6">
                                                        <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                                            {edu.score}
                                                        </div>
                                                        <div className="text-sm text-slate-500 dark:text-slate-400">
                                                            Academic Excellence
                                                        </div>
                                                    </div>

                                                    {/* Achievement Badges */}
                                                    <div className="flex flex-wrap gap-2">
                                                        {index === 0 && ['Electronics & Communication', 'IEEE Leadership', 'Project Development', 'Technical Innovation'].map((achievement, achievementIndex) => (
                                                            <span key={achievementIndex} className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-sm rounded-full">
                                                                {achievement}
                                                            </span>
                                                        ))}
                                                        {index === 1 && ['Mathematics Focus', 'Science Foundation', 'Problem Solving', 'Analytical Skills'].map((achievement, achievementIndex) => (
                                                            <span key={achievementIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                                                                {achievement}
                                                            </span>
                                                        ))}
                                                        {index === 2 && ['Academic Excellence', 'Core Subjects', 'Foundation Building', 'Learning Discipline'].map((achievement, achievementIndex) => (
                                                            <span key={achievementIndex} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm rounded-full">
                                                                {achievement}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Connection Line */}
                                        <div className={`hidden lg:block absolute top-8 w-8 h-0.5 bg-gradient-to-r ${isLeft ? 'left-full from-green-300 to-blue-300' : 'right-full from-blue-300 to-green-300'} transform ${isLeft ? 'translate-x-0' : '-translate-x-full'}`}></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Development */}
            <div className="py-24 bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-black mb-6">
                                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    SKILLS DEVELOPMENT
                                </span>
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                                How my academic journey developed key technical and professional skills
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {[
                                {
                                    period: "2021-2025",
                                    title: "Engineering Excellence",
                                    description: "Bachelor's degree focusing on electronics, communication systems, and emerging technologies",
                                    skills: ["Circuit Design", "Signal Processing", "Communication Systems", "VLSI Design", "Embedded Systems", "IoT Fundamentals"],
                                    icon: "🔬",
                                    gradient: "from-green-500 to-emerald-500",
                                    achievements: ["IEEE Student Branch Chair", "Technical Project Lead", "Research Publications"]
                                },
                                {
                                    period: "2019-2021",
                                    title: "Science Foundation",
                                    description: "Built strong fundamentals in mathematics, physics, and chemistry",
                                    skills: ["Advanced Mathematics", "Physics Principles", "Chemistry Fundamentals", "Problem Solving", "Analytical Thinking", "Scientific Method"],
                                    icon: "📐",
                                    gradient: "from-blue-500 to-cyan-500",
                                    achievements: ["Academic Excellence", "Science Fair Winner", "Mathematics Competition"]
                                },
                                {
                                    period: "2018-2019",
                                    title: "School Foundation",
                                    description: "Established core learning discipline and academic rigor",
                                    skills: ["Core Subjects", "Study Discipline", "Time Management", "Basic Programming", "Logical Thinking", "Communication Skills"],
                                    icon: "🏫",
                                    gradient: "from-indigo-500 to-purple-500",
                                    achievements: ["School Topper", "Academic Awards", "Leadership Roles"]
                                }
                            ].map((phase, index) => (
                                <div
                                    key={index}
                                    className="group relative p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

                                    <div className="relative">
                                        <div className="flex items-start space-x-6">
                                            <div className={`w-16 h-16 bg-gradient-to-r ${phase.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                {phase.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-bold rounded-full">
                                                        {phase.period}
                                                    </span>
                                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                                        {phase.title}
                                                    </h3>
                                                </div>
                                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                                    {phase.description}
                                                </p>

                                                {/* Skills */}
                                                <div className="mb-6">
                                                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Key Skills Developed</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {phase.skills.map((skill, skillIndex) => (
                                                            <span key={skillIndex} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Achievements */}
                                                <div>
                                                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Notable Achievements</h4>
                                                    <div className="space-y-2">
                                                        {phase.achievements.map((achievement, achievementIndex) => (
                                                            <div key={achievementIndex} className="flex items-center space-x-3">
                                                                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex-shrink-0"></div>
                                                                <span className="text-slate-600 dark:text-slate-300">{achievement}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Academic Stats */}
            <div className="py-24 bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                            Academic Impact
                        </h2>
                        <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
                            Quantified achievements and contributions throughout my academic journey
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    number: "9.8",
                                    label: "School CGPA",
                                    description: "Exceptional performance in secondary education"
                                },
                                {
                                    number: "70.6%",
                                    label: "Intermediate Score",
                                    description: "Strong foundation in science and mathematics"
                                },
                                {
                                    number: "7.7",
                                    label: "Engineering CGPA",
                                    description: "Consistent excellence in technical education"
                                }
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="text-4xl lg:text-5xl font-black text-white mb-3">
                                        {stat.number}
                                    </div>
                                    <div className="text-xl font-bold text-green-100 mb-2">
                                        {stat.label}
                                    </div>
                                    <div className="text-green-200">
                                        {stat.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership & Extracurricular */}
            <div className="py-24 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-black mb-6">
                                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                                    LEADERSHIP & ACHIEVEMENTS
                                </span>
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                                Beyond academics - leadership roles and extracurricular contributions
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 border border-green-200 dark:border-green-700">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-xl">
                                            👑
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">IEEE Student Branch Chair</h3>
                                            <p className="text-green-600 dark:text-green-400">Leadership Role</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                                        Led the IEEE Student Branch, organizing technical workshops, seminars, and networking events for engineering students.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Event Management', 'Team Leadership', 'Technical Coordination', 'Student Engagement'].map((skill, skillIndex) => (
                                            <span key={skillIndex} className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-sm rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-700">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-xl">
                                            🔬
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Research Projects</h3>
                                            <p className="text-blue-600 dark:text-blue-400">Innovation Focus</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                                        Developed multiple research projects in IoT, embedded systems, and electronics with practical applications.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Research Methodology', 'Project Development', 'Technical Writing', 'Innovation'].map((skill, skillIndex) => (
                                            <span key={skillIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-200 dark:border-indigo-700">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-xl">
                                            🏆
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Academic Excellence</h3>
                                            <p className="text-indigo-600 dark:text-indigo-400">Recognition</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                                        Consistently maintained high academic performance with multiple awards and recognitions throughout education.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Academic Discipline', 'Consistent Performance', 'Award Recognition', 'Merit Achievement'].map((skill, skillIndex) => (
                                            <span key={skillIndex} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-700">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl">
                                            🚀
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Technical Innovation</h3>
                                            <p className="text-purple-600 dark:text-purple-400">Future Focus</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                                        Pioneered innovative solutions in electronics and communication technologies with forward-thinking approaches.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Innovation Mindset', 'Technology Trends', 'Future Technologies', 'Creative Solutions'].map((skill, skillIndex) => (
                                            <span key={skillIndex} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-24 bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            Ready to <span className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Collaborate?</span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                            My strong academic foundation and leadership experience make me ready to contribute to innovative projects and drive technological advancement.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/projects"
                                className="px-8 py-4 bg-gradient-to-r from-green-500 via-blue-500 to-indigo-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                            >
                                <span>View My Projects</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                </svg>
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 border-2 border-green-500 text-green-600 dark:text-green-400 font-bold rounded-full hover:bg-green-50 dark:hover:bg-green-900/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <span>Get In Touch</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Contact: React.FC = () => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
<<<<<<< HEAD
        setStatus('Sending...');
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
            {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message
            },
            import.meta.env.VITE_EMAILJS_USER_ID || ''
        ).then(
            () => {
                setStatus('Thank you for your message! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            },
            (error) => {
                setStatus('Failed to send message. Please try again later.');
                setTimeout(() => setStatus(''), 5000);
            }
        );
    };
// EmailJS integration instructions:
// 1. Run: npm install emailjs-com
// 2. Create a free account at https://www.emailjs.com/
// 3. Add your Service ID, Template ID, and User ID to a .env file:
//    REACT_APP_EMAILJS_SERVICE_ID=your_service_id
//    REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
//    REACT_APP_EMAILJS_USER_ID=your_user_id
// 4. Configure your template fields to match: from_name, from_email, subject, message
=======
        setStatus('Thank you for your message! I\'ll get back to you soon.');
        setTimeout(() => setStatus(''), 5000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4

    const contactInfo = [
        {
            icon: <EmailIcon />,
            title: 'Email',
            value: 'dhoddireddy@gmail.com',
            description: 'Send me an email anytime',
            href: 'mailto:dhoddireddy@gmail.com',
            color: 'from-blue-500 to-sky-500'
        },
        {
            icon: <LinkedInIcon />,
            title: 'LinkedIn',
            value: 'Connect with me',
            description: 'Let\'s connect professionally',
            href: 'https://www.linkedin.com/in/dhoddi-mallikarjuna-reddy/',
            color: 'from-sky-500 to-indigo-500'
        },
        {
            title: 'Location',
            value: 'Bangalore, India',
            description: 'Open to opportunities',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
            ),
            color: 'from-indigo-500 to-blue-500'
        }
    ];

    return (
        <div className="space-y-20">
            {/* Hero Section */}
            <AnimatedSection id="contact-hero" className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 dark:from-slate-900/50 dark:via-blue-900/30 dark:to-slate-900/50">
                    <svg
                        className="absolute top-0 left-0 w-full h-full opacity-30"
                        viewBox="0 0 1200 600"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="contactHeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                                <stop offset="50%" stopColor="#1d4ed8" stopOpacity="0.08" />
                                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.05" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M0,300 C300,200 600,100 1200,200 L1200,600 L0,600 Z"
                            fill="url(#contactHeroGradient)"
                        />
                        <path
                            d="M0,400 C400,300 800,200 1200,300 L1200,600 L0,600 Z"
                            fill="url(#contactHeroGradient)"
                            opacity="0.5"
                        />
                    </svg>
                </div>

                <div className="relative container mx-auto px-6 py-24 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                                Let's Work Together
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            I'm always interested in new opportunities and exciting projects.
                            Whether you have a question, want to collaborate, or just want to say hello,
                            I'd love to hear from you.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:dhoddireddy@gmail.com"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                            >
                                <EmailIcon />
                                <span>Send Email</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dhoddi-mallikarjuna-reddy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
                            >
                                <LinkedInIcon />
                                <span>Connect on LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Contact Form & Info Section */}
            <AnimatedSection id="contact-form" className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {/* Contact Form */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-white dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-xl border border-slate-200/60 dark:border-slate-700/60 p-8">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                Send a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-800 dark:text-white"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-800 dark:text-white"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-800 dark:text-white"
                                        placeholder="What's this about?"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={6}
                                        required
                                        className="w-full p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-800 dark:text-white resize-none"
                                        placeholder="Tell me about your project or inquiry..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 rounded-lg text-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Send Message
                                </button>
                                {status && (
                                    <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg">
                                        <p className="text-green-700 dark:text-green-300 text-center">{status}</p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                Get In Touch
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                                Prefer to reach out directly? Here are the best ways to contact me.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.href}
                                    target={info.href?.startsWith('http') ? '_blank' : undefined}
                                    rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="group block p-6 bg-white dark:bg-slate-800/80 backdrop-blur-lg rounded-xl shadow-lg border border-slate-200/60 dark:border-slate-700/60 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white shadow-lg`}>
                                            {info.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                                                {info.title}
                                            </h3>
                                            <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                                                {info.value}
                                            </p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                {info.description}
                                            </p>
                                        </div>
                                        <svg
                                            className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/30 dark:to-sky-900/30 rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/50">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                                Response Time
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24h</div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">Email Response</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">1h</div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">LinkedIn Response</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* FAQ Section */}
            <AnimatedSection id="contact-faq" className="bg-slate-50 dark:bg-slate-800/50">
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Here are some common questions I receive
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            {
                                question: "What type of projects are you interested in?",
                                answer: "I'm passionate about AI/ML projects, IoT solutions, data analytics, and innovative web applications. I'm always excited to work on projects that make a positive impact."
                            },
                            {
                                question: "Are you available for freelance work?",
                                answer: "Yes, I'm open to freelance opportunities and consulting projects. I enjoy working with different teams and helping bring innovative ideas to life."
                            },
                            {
                                question: "What's your typical project timeline?",
                                answer: "Project timelines vary based on complexity, but I typically complete small to medium projects within 2-8 weeks, and larger projects within 2-6 months depending on scope and requirements."
                            },
                            {
                                question: "Do you provide ongoing support after project completion?",
                                answer: "Absolutely! I believe in building long-term relationships with clients and provide support and maintenance services to ensure everything runs smoothly after launch."
                            }
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-lg border border-slate-200/60 dark:border-slate-700/60 p-6 hover:shadow-xl transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="relative mt-16 overflow-hidden">
            {/* Curved SVG Background with Blue Ocean Theme */}
            <div className="absolute inset-0">
                <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 1200 200"
                    preserveAspectRatio="none"
                    style={{ transform: 'translateY(-98%)' }}
                >
                    <defs>
                        <linearGradient id="blueOceanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" />
                            <stop offset="25%" stopColor="#1d4ed8" stopOpacity="0.15" />
                            <stop offset="50%" stopColor="#1e40af" stopOpacity="0.18" />
                            <stop offset="75%" stopColor="#1e3a8a" stopOpacity="0.14" />
                            <stop offset="100%" stopColor="#172554" stopOpacity="0.1" />
                        </linearGradient>
                        <linearGradient id="blueWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.08" />
                            <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.12" />
                            <stop offset="70%" stopColor="#1d4ed8" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
                        </linearGradient>
                        <linearGradient id="blueDepthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.06" />
                            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.12" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,200 C180,160 360,80 600,120 C840,160 1020,80 1200,120 L1200,200 L0,200 Z"
                        fill="url(#blueOceanGradient)"
                        className="dark:opacity-35"
                    />
                    <path
                        d="M0,200 C240,170 420,90 600,130 C780,170 960,90 1200,130 L1200,200 L0,200 Z"
                        fill="url(#blueWaveGradient)"
                        className="dark:opacity-30"
                    />
                    <path
                        d="M0,200 C300,180 480,100 600,140 C720,180 900,100 1200,140 L1200,200 L0,200 Z"
                        fill="url(#blueDepthGradient)"
                        className="dark:opacity-25"
                    />
                </svg>
            </div>

            {/* Main Footer Content with Blue Ocean Theme */}
            <div className="relative bg-gradient-to-br from-blue-50 via-sky-50/60 to-indigo-50/40 dark:from-slate-900/95 dark:via-blue-900/25 dark:to-slate-900/95 text-slate-700 dark:text-slate-300 border-t border-blue-200/50 dark:border-blue-800/50">
                <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="md:col-span-2">
                        <Link to="/about" className="inline-flex items-center gap-2 font-extrabold text-2xl tracking-wider">
                            <span className="text-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-3">D</span>
                            <span className="text-sky-500 hover:text-sky-400 transition-all duration-300 hover:scale-110 hover:-rotate-3">M</span>
                            <span className="text-indigo-500 hover:text-indigo-400 transition-all duration-300 hover:scale-110 hover:rotate-3">K</span>
                            <span className="text-blue-600 hover:text-blue-500 transition-all duration-300 hover:scale-110 hover:-rotate-3">R</span>
                        </Link>
                        <p className="mt-4 text-sm leading-6 max-w-md text-slate-600 dark:text-slate-400">
                            Portfolio of Dhoddi Mallikarjuna Reddy — Data Science and Electronics Engineer.
                            Exploring AI, IoT, and impactful products with a passion for craft and clarity.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4">
                            <a
                                href="mailto:dhoddireddy@gmail.com"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100/90 dark:bg-blue-900/40 backdrop-blur-sm border border-blue-200/70 dark:border-blue-700/70 hover:bg-blue-200/95 dark:hover:bg-blue-800/60 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                            >
                                <EmailIcon />
                                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Email</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dhoddi-mallikarjuna-reddy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-100/90 dark:bg-sky-900/40 backdrop-blur-sm border border-sky-200/70 dark:border-sky-700/70 hover:bg-sky-200/95 dark:hover:bg-sky-800/60 hover:border-sky-300 dark:hover:border-sky-600 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 hover:scale-105"
                            >
                                <LinkedInIcon />
                                <span className="text-sm font-medium text-sky-700 dark:text-sky-300">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <span className="w-1 h-4 bg-gradient-to-b from-blue-400 via-sky-500 to-indigo-500 rounded-full"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/skills" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block">
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <span className="w-1 h-4 bg-gradient-to-b from-indigo-400 via-blue-500 to-sky-500 rounded-full"></span>
                            Location
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Bangalore, India</p>
                        <p className="text-sm mt-2 text-slate-500 dark:text-slate-500">
                            Open to opportunities in AI, Data, and Embedded/IoT.
                        </p>
                        <div className="mt-4">
                            <a
                                href="/Dhoddi_Mallikarjuna_Reddy_CV.pdf"
                                download
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:via-sky-600 hover:to-indigo-600"
                            >
                                <span aria-hidden>📄</span>
                                <span>Download CV</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Light Orange Waves */}
                <div className="relative">
                    <svg
                        className="absolute top-0 left-0 w-full h-12"
                        viewBox="0 0 1200 48"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="bottomOrangeWave" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#fb923c" stopOpacity="0.15" />
                                <stop offset="30%" stopColor="#f97316" stopOpacity="0.18" />
                                <stop offset="70%" stopColor="#ea580c" stopOpacity="0.16" />
                                <stop offset="100%" stopColor="#dc2626" stopOpacity="0.12" />
                            </linearGradient>
                            <linearGradient id="bottomOrangeAccent" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#fdba74" stopOpacity="0.1" />
                                <stop offset="50%" stopColor="#fb923c" stopOpacity="0.14" />
                                <stop offset="100%" stopColor="#f97316" stopOpacity="0.12" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M0,48 C200,35 400,15 600,25 C800,35 1000,15 1200,25 L1200,48 L0,48 Z"
                            fill="url(#bottomOrangeWave)"
                            className="dark:opacity-45"
                        />
                        <path
                            d="M0,48 C300,40 500,20 700,30 C900,40 1100,20 1200,30 L1200,48 L0,48 Z"
                            fill="url(#bottomOrangeAccent)"
                            className="dark:opacity-35"
                        />
                        <path
                            d="M0,48 C400,42 600,25 800,35 C1000,45 1200,25 1200,35 L1200,48 L0,48 Z"
                            fill="currentColor"
                            className="text-orange-200/60 dark:text-orange-800/60"
                        />
                    </svg>
                    <div className="bg-gradient-to-r from-orange-50/90 via-orange-100/70 to-orange-50/90 dark:from-orange-900/95 dark:via-orange-800/40 dark:to-orange-900/95 border-t border-orange-200/60 dark:border-orange-800/60">
                        <div className="container mx-auto px-6 py-6 text-xs flex flex-col md:flex-row items-center justify-between gap-2">
                            <p className="text-slate-600 dark:text-slate-400">
                                &copy; {new Date().getFullYear()} Dhoddi Mallikarjuna Reddy. All rights reserved.
                            </p>
                            <p className="text-orange-600 dark:text-orange-400 font-medium flex items-center gap-1">
                                <span>Powered by</span>
                                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-bold">
                                    LV Techguides
                                </span>
                                <span>🧡</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};



// Layout with Header/Footer and theming
const Layout: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        // Check for saved theme preference or fallback to system preference
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light' || savedTheme === 'dark') {
                return savedTheme;
            }
            // Check system preference
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        }
        // Default to light theme
        return 'light';
    });

    // Apply theme class to HTML element and save preference
    useEffect(() => {
        const root = window.document.documentElement;

        // Remove any existing theme classes
        root.classList.remove('light', 'dark');

        // Add the current theme class
        root.classList.add(theme);

        // Save preference
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }, []);

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
            <main className="flex-1 pt-32">
                <div className="container mx-auto max-w-7xl px-6">
                    <Outlet />
                </div>
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
    </>
);

const AboutPage: React.FC = () => (
    <>
        <SetTitle title="DMKR | About" />
        <About />
    </>
);
const ServicesPage: React.FC = () => (
    <>
        <SetTitle title="DMKR | Services" />
        <Services />
    </>
);
const SkillsPage: React.FC = () => (
    <>
        <SetTitle title="DMKR | Skills" />
        <SkillsErrorBoundary>
<<<<<<< HEAD
            <React.Suspense fallback={<div className="text-center py-12">Loading skills...</div>}>
                <Skills />
            </React.Suspense>
=======
            <Skills />
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
        </SkillsErrorBoundary>
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
<<<<<<< HEAD
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
            <Experience />
        </div>
=======
        <Experience />
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
    </>
);
const EducationPage: React.FC = () => (
    <>
        <SetTitle title="DMKR | Education" />
<<<<<<< HEAD
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
            <EducationTimeline />
        </div>
=======
        <EducationTimeline />
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
    </>
);
const AchievementsPage: React.FC = () => (
    <>
        <SetTitle title="DMKR | Achievements" />
<<<<<<< HEAD
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
            <Achievements />
        </div>
=======
        <Achievements />
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
    </>
);
const ContactPage: React.FC = () => (
    <>
        <SetTitle title="DMKR | Contact" />
<<<<<<< HEAD
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
            <Contact />
        </div>
=======
        <Contact />
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
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
<<<<<<< HEAD
            {/* Skip to content link for accessibility */}
            <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-cyan-600 text-white px-4 py-2 rounded shadow-lg">Skip to main content</a>
            <ScrollToTop />
            <Routes>
                <Route element={<Layout />}> 
=======
            <ScrollToTop />
            <Routes>
                <Route element={<Layout />}>
>>>>>>> 4d296c258f4c5959c323b24c71ea9daa993385e4
                    <Route path="/" element={<AboutPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
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
