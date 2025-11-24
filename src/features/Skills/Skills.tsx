import React from 'react';

const skills = [
  { name: 'Javascript (Typescript)', years: '3 years' },
  { name: 'React', years: '3 years' },
  { name: 'Node.js', years: '3 years' },
  { name: 'Go', years: '1 year' },
  { name: 'C Lang', years: '3 years' },
  { name: 'Firebase', years: '2 years' },
  { name: 'AWS', years: '2 years' },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-3xl mx-auto">
      <h3 className="text-xl md:text-xl font-semibold text-gray-700">Skills</h3>
      <ul className="mt-4 text-base md:text-lg text-gray-600 space-y-1">
        {skills.map((skill) => (
          <li key={skill.name} className="flex justify-between items-center border-b border-gray-100 pb-1 last:border-0">
            <div className="flex items-center">
              <span className="mr-2 text-gray-400">•</span>
              <span className="font-medium">{skill.name}</span>
            </div>
            <span className="text-gray-500 text-sm md:text-base whitespace-nowrap ml-4">{skill.years}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
