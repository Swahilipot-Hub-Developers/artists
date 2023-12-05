import React, { useState } from "react";

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(Array(3).fill(null)); // Track hover state for each column

  // Dummy skills data
  const dummySkillsRows = [
    ["Painting", "Singing", "Dance", "Programming"],
    ["Cooking", "Writing", "Photography", "Graphic Design"],
    ["Cooking", "Writing", "Photography", "Graphic Design"],
  ];

  const handleMouseEnter = (rowIndex, index) => {
    const newHoveredIndex = [...hoveredIndex];
    newHoveredIndex[rowIndex] = index;
    setHoveredIndex(newHoveredIndex);
  };

  const handleMouseLeave = (rowIndex) => {
    const newHoveredIndex = [...hoveredIndex];
    newHoveredIndex[rowIndex] = null;
    setHoveredIndex(newHoveredIndex);
  };

  return (
    <div className="container" id="skills">
      <h6 className="display-4 text-primary m-5 text-center">
        Skills and Talents
      </h6>
      {dummySkillsRows.map((skillsRow, rowIndex) => (
        <div className="row justify-content-center" key={rowIndex}>
          {skillsRow.map((skill, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div
                className="card"
                onMouseEnter={() => handleMouseEnter(rowIndex, index)}
                onMouseLeave={() => handleMouseLeave(rowIndex)}
                style={{
                  backgroundColor:
                    hoveredIndex[rowIndex] === index ? "" : "#f0f0f0",
                  transition: "background-color ease-in-out 0.3s",
                }}
              >
                <div className="card-body text-center" style={{ fontSize: '16px'}}>
                  {skill}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
