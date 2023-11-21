// components/Skills.js
import React from 'react';

const Skills = () => {
  // Dummy skills data
  const dummySkills = ['Painting', 'Singing', 'Dance'];

  return (
    <div>
      <h6 className="display-4 text-primary m-5 text-center">Skills and Talents</h6>
      <ul className="list-group">
        {dummySkills.map((skill, index) => (
          <li className="list-group-item" key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
