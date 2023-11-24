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
        <h1 style={{ fontSize: '24px', color: '#0000FF', textAlign: 'center', marginBottom: '20px' }}> About</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputFullName" className="form-label">FullName</label>
          <input type="text" className="form-control" id="exampleInputFullName" aria-describedby="FullNamelHelp" onChange={handleChange} name="FullName" />
          {errors.FullName && <div className="text-danger"></div>}
        </div>
        <div className="mb-3">
          <label htmlForfor="inputNumber" className="form-label">Picture Upload</label>
          <div className="col-sm-12">
            <input className="form-control" type="file" id="formFile" />
          </div>
        </div>

        <div className="mb-3">
          <label htmlForfor="inputNumber" className="form-label">Video Upload</label>
          <div className="col-sm-12">
            <input className="form-control" type="file" id="formFile" />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDescription" className="form-label">Description</label>
          <input type="Description" className="form-control" id="exampleInputDescription" onChange={handleChange} name="Description" />
          {errors.Description && <div className="text-danger"></div>}
        </div>

        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default MyForm;




