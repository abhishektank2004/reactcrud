import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AddNewUser() {
  const initialUserState = {
    name: '', // Updated from 'username' to 'name'
    email: '',
    address: '',
  };

  const [user, setUser] = useState(initialUserState);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({}); // State to manage validation errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!user.name.trim()) newErrors.name = 'Name is required'; // Updated validation for 'name'
    if (!user.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!user.address.trim()) newErrors.address = 'Address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      alert('Please fix the form errors.');
      return;
    }
    await axios
      .post('http://localhost:8000/api/users', user)
      .then((response) => {
        console.log(response.data);
        alert('User created successfully');
        setUser(initialUserState);
        navigate('/UserData');
      })
      .catch((error) => {
        console.error(error);
        alert('Error creating user');
      });
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-primary mb-4">Add User Data</h2>
        <Link to="/UserData">
          <i className="fa-solid fa-backward"></i>&nbsp;
          Back
        </Link>
        <br />
        <form onSubmit={handleSubmit} className="p-4 bg-light border rounded shadow-sm">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              name="name" // Updated to 'name'
              value={user.name}
              onChange={handleInputChange}
              placeholder="Enter name"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              placeholder="Enter email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className={`form-control ${errors.address ? 'is-invalid' : ''}`}
              id="address"
              name="address"
              rows="3"
              value={user.address}
              onChange={handleInputChange}
              placeholder="Enter address"
            ></textarea>
            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNewUser;
