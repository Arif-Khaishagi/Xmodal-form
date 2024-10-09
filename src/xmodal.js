import React, { useState } from 'react';

function UserModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleSubmit = () => {
    if (!username || !email || !phone || !dob) {
      alert('Please fill all the fields');
      document.classList.add('error-message');
      return;
    }

    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      document.getElementById('email').classList.add('error-message');
      return;
    }

    if (phone.length !== 10) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    const dobDate = new Date(dob);
    const currentDate = new Date();

    if (dobDate > currentDate) {
      alert('Invalid Date of Birth. Please enter a valid date.');
      return;
    }

    console.log('Submitted data:', { username, email, phone, dob });

    // Close the modal
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal">

      {!isOpen && (
        <div>
        <h1>User Details Modal</h1>
        <button onClick={handleOpen}>Open Form</button>
        </div>
      )}
      {isOpen && (
        <div className="modal-content">
          <h2>Fill Details</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
}

export default UserModal;