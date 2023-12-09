import React, { useState } from "react";

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(Array(3).fill(null)); // Track hover state for each column
  const [userSkills, setUserSkills] = useState([
    [],
    [],
    [],
  ]);

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

  const handleSkillChange = (rowIndex, index, event) => {
    const inputValue = event?.target?.value || '';
    const newSkills = [...userSkills];
    if (!newSkills[rowIndex]) {
      newSkills[rowIndex] = [];
    }
    newSkills[rowIndex][index] = inputValue;
    setUserSkills(newSkills);
  };

  const addSkill = (rowIndex) => {
    const newSkills = [...userSkills];
    newSkills[rowIndex] = [...newSkills[rowIndex], ""];
    setUserSkills(newSkills);
  };

  const deleteSkill = (rowIndex, index) => {
    const newSkills = [...userSkills];
    newSkills[rowIndex].splice(index, 1);
    setUserSkills(newSkills);
  };

  const saveSkill = () => {
    console.log("Skills saved:", userSkills);
  };

  const addSkillToAll = () => {
    const newSkills = userSkills.map(row => [...row, ""]);
    setUserSkills(newSkills);
  };

  return (
    <div className="container" id="skills">
      <h6 className="display-4 text-primary m-5 text-center">
        Skills and Talents
      </h6>
      {userSkills.map((skillsRow, rowIndex) => (
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
                  <input
                    type="text"
                    className="form-control"
                    value={skill || ""}
                    onChange={(event) =>
                      handleSkillChange(rowIndex, index, event)
                    }
                  />
                  <button
                    className="btn btn-sm btn-success mt-2"
                    onClick={saveSkill}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-danger mt-2 ml-2"
                    onClick={() => deleteSkill(rowIndex, index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <div className="row justify-content-center">
        <div className="col-md-3 mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add skills (comma-separated)"
              onChange={(event) => handleSkillChange(0, 0, event)} // This will handle changes for the single input field
            />
            <button
              className="btn btn-primary"
              onClick={addSkillToAll} // Clicking this button will add a skill to each row
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
