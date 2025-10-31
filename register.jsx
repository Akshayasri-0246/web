//register.jsx

import React, { useState } from 'react';
const Register = () => {
const [form, setForm] = useState({});
const [errors, setErrors] = useState({});
const handleSubmit = () => {
const e = {};
if (!form.firstName) e.firstName = 'First Name is required';
if (!form.lastName) e.lastName = 'Last Name is required';
if (!form.mobile) e.mobile = 'Mobile Number is required';
if (!form.email) e.email = 'Please enter a valid email address';
if (!form.password || form.password.length < 6)
e.password = 'Password must be at least 6 characters';
if (!form.confirm) e.confirm = 'Confirm Password is required';
setErrors(e);
};
return (
<div>
<h1>Register for SavorStudio</h1>
<button onClick={handleSubmit}>Register</button>
{Object.values(errors).map((msg, i) => (
<p key={i}>{msg}</p>
))}
</div>
);
};
export default Register;
