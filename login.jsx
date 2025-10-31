//login.jsx
import React, { useState } from 'react';
const Login = () => {
const [form, setForm] = useState({ email: '', password: '' });
const [errors, setErrors] = useState({});
const handleSubmit = () => {
const newErrors = {};
if (!form.email) newErrors.email = 'Email is required';
if (!form.password) newErrors.password = 'Password is required';
setErrors(newErrors);
};
return (
<div>
<h1>Login</h1>
<input
placeholder="Email"
value={form.email}
onChange={(e) => setForm({ ...form, email: e.target.value })}
/>
<input
placeholder="Password"
type="password"
value={form.password}
onChange={(e) => setForm({ ...form, password: e.target.value })}
/>
<button onClick={handleSubmit}>Login</button>
{errors.email && <p>{errors.email}</p>}
{errors.password && <p>{errors.password}</p>}
</div>
);
};
export default Login;
