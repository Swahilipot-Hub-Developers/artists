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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};
    if (!formData.FullName.trim()) {
      formIsValid = false;
      newErrors = {
        ...newErrors,
        FullName: 'Full Name is required',
      };
    }
    if (!formData.email.trim()) {
      formIsValid = false;
      newErrors = {
        ...newErrors,
        email: 'Email is required',
      };
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        formIsValid = false;
        newErrors = {
          ...newErrors,
          email: 'Invalid email address',
        };
      }
    }
    if (formData.password.length < 6) {
      formIsValid = false;
      newErrors = {
        ...newErrors,
        password: 'Password must be at least 6 characters long',
      };
    }
    if (!formData.skills.trim()) {
      formIsValid = false;
      newErrors = {
        ...newErrors,
        skills: 'Skills/Talents is required',
      };
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
  
      console.log('Form submitted with data:', formData);
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ width: '300px' }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputFullName" className="form-label">FullName</label>
          <input type="text" className="form-control" id="exampleInputFullName" aria-describedby="FullNamelHelp" onChange={handleChange} name="FullName"/>
          {errors.FullName && <div className="text-danger"></div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} name="email"/>
          {errors.email && <div className="text-danger"></div>}
          <div id="emailHelp" className="form-text"></div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword" onChange={handleChange} name="password"/>
          {errors.password && <div className="text-danger"></div>}
        </div>


        <div className="mb-3">
          <label htmlFor="exampleInputSkillsTalents" className="form-label">Skills/Talents</label>
          <input type="text" className="form-control" id="exampleInputSkillsTalents" onChange={handleChange} name="skills"/>
          {errors.skills && <div className="text-danger"></div>}
        </div>

      

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;




