import React, { useState } from 'react';
import './App.css'; // Make sure to create a CSS file for styling

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { username, email, phone, dob } = formData;

    if (!username) {
      alert('Please fill out the Username field.');
      return false;
    }
    if (!email) {
      alert('Please fill out the Email field.');
      return false;
    }
    if (!phone) {
      alert('Please fill out the Phone Number field.');
      return false;
    }
    if (!dob) {
      alert('Please fill out the Date of Birth field.');
      return false;
    }
    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return false;
    }
    if (phone.length !== 10 || isNaN(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return false;
    }
    if (new Date(dob) > new Date()) {
      alert('Invalid date of birth. Please enter a valid date.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      // Reset the form
      setFormData({
        username: '',
        email: '',
        phone: '',
        dob: ''
      });
      setIsOpen(false);
    }
  };

  return (
    <div>
<h1>User Details Modal</h1>
      <button className='btn' onClick={() => setIsOpen(true)}>Open Form</button>
      {isOpen && (
        // console.log("inside"),
        <div className="modal" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* console.log("agin"), */}
          <span className="close">&times;</span>
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>
                Username:
              </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                </div>
                <div className="form-group">
              <label>
                Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
              <label>
                Phone:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                </div>
                <div className="form-group">
              <label>
                Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
                </div>
              
              <button className="btn" type="submit">Submit</button>
            </form>
        </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
