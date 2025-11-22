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
  const maxLength = Math.max(...skills.map(skill => skill.name.length));

  return (
    <section id="skills" className="w-full max-w-3xl mx-auto">
      <h3 className="text-xl md:text-xl font-semibold text-gray-700">Skills</h3>
      <ul className="mt-4 text-base md:text-lg text-gray-600 space-y-1 font-mono">
        {skills.map((skill) => {
          const padding = '\u00A0'.repeat(maxLength - skill.name.length);
          return (
            <li key={skill.name} className="flex">
              <span className="mr-2">•</span>
              <span>{skill.name}{padding} - {skill.years}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
