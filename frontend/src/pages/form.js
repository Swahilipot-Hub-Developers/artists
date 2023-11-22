import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    FullName: '',
    email: '',
    password: '',
    type: '',
    description: '',
    skills: '',
    talents: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log('Form submitted with data:', formData);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ width: '300px' }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputFullName" className="form-label">FullName</label>
          <input type="text" className="form-control" id="exampleInputFullName" aria-describedby="FullNamelHelp" onChange={handleChange} name="FullName" value={formData.FullName} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} name="email" value={formData.email} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputType" className="form-label">Type</label>
          <input type="text" className="form-control" id="exampleInputType" onChange={handleChange} name="type" value={formData.type} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDescription" className="form-label">Description</label>
          <textarea className="form-control" id="exampleInputDescription" rows="3" onChange={handleChange} name="description" value={formData.description}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputSkills/Talents" className="form-label">Skills/Talents</label>
          <input type="text" className="form-control" id="exampleInputSkillsTalents" onChange={handleChange} name="skills/talents" value={formData.talents} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;



