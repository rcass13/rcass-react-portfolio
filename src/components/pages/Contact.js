import React, { useState } from 'react';
import '../../assets/styles/bootstrap.css';

export default function Contact() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [emailError, setEmailError] = useState('');

const handleNameChange = (event) => {
setName(event.target.value);
};

const handleEmailChange = (event) => {
setEmail(event.target.value);
// Check if the email is valid using a regular expression
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
if (!emailRegex.test(event.target.value)) {
setEmailError('Invalid email address');
} else {
setEmailError('');
}
};

const handleMessageChange = (event) => {
setMessage(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
// Perform any necessary validation before submitting the form
};

const handleBlur = (event) => {
// Check if the field is empty and display an error message if necessary
if (event.target.value.trim() === '') {
event.target.setCustomValidity('This field is required');
} else {
event.target.setCustomValidity('');
}
};

return (
<div className="container" style={{ maxWidth: '600px', margin: 'auto' }}>
<h1>Contact me!</h1>
<form onSubmit={handleSubmit}>
<div className="mb-3">
<label htmlFor="name" className="form-label">
Name
</label>
<input
         type="text"
         className="form-control"
         id="name"
         value={name}
         onChange={handleNameChange}
         onBlur={handleBlur}
         required
       />
</div>
<div className="mb-3">
<label htmlFor="email" className="form-label">
Email address
</label>
<input
         type="email"
         className="form-control"
         id="email"
         value={email}
         onChange={handleEmailChange}
         onBlur={handleBlur}
         required
       />
{emailError && <div className="invalid-feedback">{emailError}</div>}
</div>
<div className="mb-3">
<label htmlFor="message" className="form-label">
Message
</label>
<textarea
         className="form-control"
         id="message"
         value={message}
         onChange={handleMessageChange}
         onBlur={handleBlur}
         required
       ></textarea>
</div>
<button type="submit" className="btn btn-primary">
Submit
</button>
</form>
<p>Note: This form does not send me a message as of now, functionality will be added soon.</p>
</div>
);
}