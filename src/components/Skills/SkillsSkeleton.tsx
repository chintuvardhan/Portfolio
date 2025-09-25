import React from 'react';

const SkillsSkeleton: React.FC = () => (
    <div className="space-y-6">
        <div className="animate-pulse">
            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mx-auto"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200/70 dark:border-slate-700/50">
                    <div className="flex justify-between items-start">
                        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/3"></div>
                        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-16"></div>
                    </div>
                    <div className="mt-4 h-2 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    <div className="mt-3 h-3 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
                </div>
            ))}
        </div>
    </div>
);

export default SkillsSkeleton;
