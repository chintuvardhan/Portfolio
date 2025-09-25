import { FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaDatabase, FaCode, FaMobile, FaServer } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiRedux, SiGraphql, SiPostgresql, SiMongodb, SiFirebase } from 'react-icons/si';

export interface Skill {
    name: string;
    level: number;
    description: string;
    icon: React.ReactNode;
    projects?: string[];
}

export interface SkillCategory {
    name: string;
    description: string;
    icon: React.ReactNode;
    skills: Skill[];
}

export const SKILLS: SkillCategory[] = [
    {
        name: 'Frontend',
        description: 'Building responsive and interactive user interfaces with modern web technologies.',
        icon: <FaCode className="text-blue-500" />,
        skills: [
            {
                name: 'React',
                level: 90,
                description: 'Building complex and performant user interfaces with React and its ecosystem.',
                icon: <FaReact className="text-blue-500" />
            },
            {
                name: 'TypeScript',
                level: 85,
                description: 'Strongly typed JavaScript for better developer experience and code quality.',
                icon: <SiTypescript className="text-blue-600" />
            },
            {
                name: 'JavaScript',
                level: 90,
                description: 'Proficient in modern JavaScript (ES6+) and its features.',
                icon: <SiJavascript className="text-yellow-400" />
            },
            {
                name: 'HTML5',
                level: 95,
                description: 'Semantic HTML5 markup for accessible and SEO-friendly web pages.',
                icon: <SiHtml5 className="text-orange-500" />
            },
            {
                name: 'CSS3',
                level: 90,
                description: 'Styling with CSS3, including Flexbox, Grid, and modern layout techniques.',
                icon: <SiCss3 className="text-blue-500" />
            },
            {
                name: 'Redux',
                level: 80,
                description: 'State management for complex React applications.',
                icon: <SiRedux className="text-purple-500" />
            }
        ]
    },
    {
        name: 'Backend',
        description: 'Building scalable and efficient server-side applications and APIs.',
        icon: <FaServer className="text-green-500" />,
        skills: [
            {
                name: 'Node.js',
                level: 85,
                description: 'Building server-side applications with Node.js and Express.',
                icon: <FaNodeJs className="text-green-600" />
            },
            {
                name: 'Python',
                level: 80,
                description: 'Backend development with Python and frameworks like Django and Flask.',
                icon: <FaPython className="text-blue-600" />
            },
            {
                name: 'Java',
                level: 75,
                description: 'Enterprise application development with Java and Spring Boot.',
                icon: <FaJava className="text-red-500" />
            },
            {
                name: 'GraphQL',
                level: 75,
                description: 'Building flexible and efficient APIs with GraphQL.',
                icon: <SiGraphql className="text-pink-500" />
            }
        ]
    },
    {
        name: 'Database',
        description: 'Working with both SQL and NoSQL databases for data storage and retrieval.',
        icon: <FaDatabase className="text-yellow-500" />,
        skills: [
            {
                name: 'PostgreSQL',
                level: 85,
                description: 'Relational database management with PostgreSQL.',
                icon: <SiPostgresql className="text-blue-700" />
            },
            {
                name: 'MongoDB',
                level: 80,
                description: 'NoSQL database for flexible and scalable data storage.',
                icon: <SiMongodb className="text-green-500" />
            },
            {
                name: 'Firebase',
                level: 75,
                description: 'Backend-as-a-Service with Firebase, including Firestore and Authentication.',
                icon: <SiFirebase className="text-yellow-500" />
            }
        ]
    },
    {
        name: 'DevOps & Cloud',
        description: 'Deployment, CI/CD, and cloud infrastructure management.',
        icon: <FaAws className="text-orange-500" />,
        skills: [
            {
                name: 'AWS',
                level: 75,
                description: 'Cloud services and infrastructure on Amazon Web Services.',
                icon: <FaAws className="text-orange-500" />
            },
            {
                name: 'Docker',
                level: 80,
                description: 'Containerization and deployment with Docker.',
                icon: <FaDocker className="text-blue-500" />
            }
        ]
    },
    {
        name: 'Mobile',
        description: 'Cross-platform mobile application development.',
        icon: <FaMobile className="text-purple-500" />,
        skills: [
            {
                name: 'React Native',
                level: 70,
                description: 'Building cross-platform mobile applications with React Native.',
                icon: <FaReact className="text-blue-500" />
            }
        ]
    }
];

export default SKILLS;
