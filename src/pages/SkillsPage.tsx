import React from 'react';
import Skills from '../components/Skills';

const SkillsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-32 max-w-6xl">
      <h1 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">My Skills</h1>
      <Skills />
    </div>
  );
};

export default SkillsPage;
