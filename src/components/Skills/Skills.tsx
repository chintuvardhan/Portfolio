import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { SKILLS, Skill, SkillCategory } from '../../data/skills';

// Professional skill level definitions
const SKILL_LEVELS = {
    BEGINNER: { name: 'Beginner', color: 'emerald', bgColor: 'bg-emerald-100', textColor: 'text-emerald-700', borderColor: 'border-emerald-200' },
    INTERMEDIATE: { name: 'Intermediate', color: 'cyan', bgColor: 'bg-cyan-100', textColor: 'text-cyan-700', borderColor: 'border-cyan-200' },
    ADVANCED: { name: 'Advanced', color: 'blue', bgColor: 'bg-blue-100', textColor: 'text-blue-700', borderColor: 'border-blue-200' },
    EXPERT: { name: 'Expert', color: 'indigo', bgColor: 'bg-indigo-100', textColor: 'text-indigo-700', borderColor: 'border-indigo-200' }
};

const getSkillLevel = (level: number) => {
    if (level >= 90) return SKILL_LEVELS.EXPERT;
    if (level >= 75) return SKILL_LEVELS.ADVANCED;
    if (level >= 50) return SKILL_LEVELS.INTERMEDIATE;
    return SKILL_LEVELS.BEGINNER;
};

const getCategoryColor = (categoryName: string) => {
    const colors: Record<string, string> = {
        'Frontend': 'blue',
        'Backend': 'green',
        'Database': 'yellow',
        'DevOps & Cloud': 'orange',
        'Mobile': 'purple'
    };
    return colors[categoryName] || 'slate';
};

// Enhanced skill card component
const SkillCard: React.FC<{
    skill: Skill;
    categoryName: string;
    categoryColor: string;
    isExpanded: boolean;
    onToggle: () => void;
}> = ({ skill, categoryName, categoryColor, isExpanded, onToggle }) => {
    const skillLevel = getSkillLevel(skill.level);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`group relative bg-white dark:bg-slate-800 rounded-xl border-2 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                isHovered ? 'shadow-2xl scale-105' : 'shadow-lg hover:shadow-xl'
            } border-slate-200 dark:border-slate-700 hover:border-${categoryColor}-300 dark:hover:border-${categoryColor}-600`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onToggle}
        >
            {/* Category indicator */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${categoryColor}-400 to-${categoryColor}-600 rounded-t-xl`} />

            <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3 flex-1">
                        <div className={`w-12 h-12 rounded-lg bg-${categoryColor}-100 dark:bg-${categoryColor}-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <div className={`text-xl text-${categoryColor}-600 dark:text-${categoryColor}-400`}>
                                {skill.icon}
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                {skill.name}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                                {categoryName}
                            </p>
                        </div>
                    </div>

                    {/* Skill level badge */}
                    <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${skillLevel.bgColor} ${skillLevel.textColor} border ${skillLevel.borderColor} transition-all duration-300`}>
                        {skillLevel.name}
                    </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {isExpanded || skill.description.length <= 120
                            ? skill.description
                            : `${skill.description.substring(0, 120)}...`
                        }
                    </p>
                    {skill.description.length > 120 && (
                        <button
                            className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium mt-1 transition-colors duration-200"
                        >
                            {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                    )}
                </div>

                {/* Progress bar */}
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Proficiency</span>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                        <div
                            className={`h-full bg-gradient-to-r from-${categoryColor}-400 to-${categoryColor}-600 rounded-full transition-all duration-1000 ease-out relative`}
                            style={{ width: `${skill.level}%` }}
                        >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Projects */}
                {skill.projects && skill.projects.length > 0 && (
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                        <h5 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">
                            Used in Projects
                        </h5>
                        <div className="flex flex-wrap gap-1">
                            {skill.projects.slice(0, 3).map((project, idx) => (
                                <span
                                    key={idx}
                                    className={`px-2 py-1 text-xs font-medium rounded-md ${skillLevel.bgColor} ${skillLevel.textColor} border ${skillLevel.borderColor}`}
                                >
                                    {project}
                                </span>
                            ))}
                            {skill.projects.length > 3 && (
                                <span className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600">
                                    +{skill.projects.length - 3} more
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 dark:to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
    );
};

// Statistics component
const SkillsStats: React.FC<{ skills: SkillCategory[] }> = ({ skills }) => {
    const stats = useMemo(() => {
        const totalSkills = skills.reduce((acc, cat) => acc + cat.skills.length, 0);
        const avgLevel = skills.reduce((acc, cat) =>
            acc + cat.skills.reduce((catAcc, skill) => catAcc + skill.level, 0) / cat.skills.length, 0) / skills.length;

        const levelDistribution = skills.reduce((acc, cat) => {
            cat.skills.forEach(skill => {
                const level = getSkillLevel(skill.level);
                acc[level.name] = (acc[level.name] || 0) + 1;
            });
            return acc;
        }, {} as Record<string, number>);

        const categoryDistribution = skills.reduce((acc, cat) => {
            acc[cat.name] = cat.skills.length;
            return acc;
        }, {} as Record<string, number>);

        return { totalSkills, avgLevel: Math.round(avgLevel), levelDistribution, categoryDistribution };
    }, [skills]);

    const StatCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode; color: string }> = ({
        title, value, icon, color
    }) => (
        <div className={`bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300`}>
            <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg bg-${color}-100 dark:bg-${color}-900/30 flex items-center justify-center`}>
                    <div className={`text-lg text-${color}-600 dark:text-${color}-400`}>
                        {icon}
                    </div>
                </div>
                <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{title}</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
                title="Total Skills"
                value={stats.totalSkills}
                icon="🛠️"
                color="blue"
            />
            <StatCard
                title="Average Level"
                value={`${stats.avgLevel}%`}
                icon="📈"
                color="green"
            />
            <StatCard
                title="Categories"
                value={skills.length}
                icon="📂"
                color="purple"
            />
            <StatCard
                title="Expert Level"
                value={stats.levelDistribution[SKILL_LEVELS.EXPERT.name] || 0}
                icon="⭐"
                color="indigo"
            />
        </div>
    );
};

export const Skills: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>({});
    const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');
    const [isLoading, setIsLoading] = useState(true);

    // Get unique categories and levels
    const categories = ['All', ...Array.from(new Set(SKILLS.map(cat => cat.name)))];
    const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

    // Filter skills based on search and filters
    const filteredSkills = useMemo(() => {
        return SKILLS.filter(category => {
            const matchesCategory = selectedCategory === 'All' || category.name === selectedCategory;
            const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 category.skills.some(skill =>
                                     skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                     skill.description.toLowerCase().includes(searchTerm.toLowerCase())
                                 );

            // Filter skills within category
            const filteredCategorySkills = category.skills.filter(skill => {
                const matchesLevel = selectedLevel === 'All' || getSkillLevel(skill.level).name === selectedLevel;
                return matchesLevel;
            });

            return matchesCategory && matchesSearch && filteredCategorySkills.length > 0;
        }).map(category => ({
            ...category,
            skills: category.skills.filter(skill =>
                selectedLevel === 'All' || getSkillLevel(skill.level).name === selectedLevel
            )
        }));
    }, [searchTerm, selectedCategory, selectedLevel]);

    const toggleSkillExpansion = useCallback((skillKey: string) => {
        setExpandedSkills(prev => ({
            ...prev,
            [skillKey]: !prev[skillKey]
        }));
    }, []);

    // Initialize loading state
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <AnimatedSection id="skills" className="py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl mx-auto mb-6 animate-pulse" />
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                            My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Skills</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Loading professional skills...
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-6 animate-pulse">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg" />
                                    <div className="flex-1">
                                        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2" />
                                        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
                                    </div>
                                </div>
                                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded mb-2" />
                                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        {/* Title and Description */}
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Skills</h1>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Technical Expertise & Proficiency</p>
                                </div>
                            </div>
                        </div>

                        {/* Search and Filters */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                            {/* Search */}
                            <div className="relative flex-1 lg:w-80">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search skills..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>

                            {/* Category Filter */}
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category === 'All' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>

                            {/* Level Filter */}
                            <select
                                value={selectedLevel}
                                onChange={(e) => setSelectedLevel(e.target.value)}
                                className="px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            >
                                {levels.map((level) => (
                                    <option key={level} value={level}>
                                        {level === 'All' ? 'All Levels' : level}
                                    </option>
                                ))}
                            </select>

                            {/* View Toggle */}
                            <div className="flex rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                                        viewMode === 'grid'
                                            ? 'bg-blue-500 text-white shadow-sm'
                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setViewMode('compact')}
                                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                                        viewMode === 'compact'
                                            ? 'bg-blue-500 text-white shadow-sm'
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
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-8">
                {/* Statistics */}
                <SkillsStats skills={SKILLS} />

                {/* Results Summary */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-6">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Skills Overview
                        </h2>
                        <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                            <span>{filteredSkills.length} categories</span>
                            <span>•</span>
                            <span>{filteredSkills.reduce((acc, cat) => acc + cat.skills.length, 0)} skills</span>
                        </div>
                    </div>

                    {/* Clear Filters */}
                    {(searchTerm || selectedCategory !== 'All' || selectedLevel !== 'All') && (
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('All');
                                setSelectedLevel('All');
                            }}
                            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
                        >
                            Clear Filters
                        </button>
                    )}
                </div>

                {/* Skills Grid */}
                {filteredSkills.length > 0 ? (
                    <div className="space-y-12">
                        {filteredSkills.map((category, categoryIndex) => {
                            const categoryColor = getCategoryColor(category.name);

                            return (
                                <div key={category.name} className="space-y-6">
                                    {/* Category Header */}
                                    <div className="flex items-center space-x-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                                        <div className={`w-12 h-12 rounded-xl bg-${categoryColor}-100 dark:bg-${categoryColor}-900/30 flex items-center justify-center`}>
                                            <div className={`text-xl text-${categoryColor}-600 dark:text-${categoryColor}-400`}>
                                                {category.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                                {category.name}
                                            </h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                {category.description}
                                            </p>
                                        </div>
                                        <div className="ml-auto">
                                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium rounded-full">
                                                {category.skills.length} skills
                                            </span>
                                        </div>
                                    </div>

                                    {/* Skills Grid */}
                                    <div className={`grid gap-6 ${
                                        viewMode === 'grid'
                                            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                            : 'grid-cols-1 md:grid-cols-2'
                                    }`}>
                                        {category.skills.map((skill, skillIndex) => {
                                            const skillKey = `${category.name}-${skill.name}`;
                                            return (
                                                <SkillCard
                                                    key={skillKey}
                                                    skill={skill}
                                                    categoryName={category.name}
                                                    categoryColor={categoryColor}
                                                    isExpanded={!!expandedSkills[skillKey]}
                                                    onToggle={() => toggleSkillExpansion(skillKey)}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    // Empty State
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m6 5H3a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No skills found</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('All');
                                setSelectedLevel('All');
                            }}
                            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {/* Floating Action Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Skills;
