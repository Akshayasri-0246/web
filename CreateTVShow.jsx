//CreateTVShow.jsx
import React, { useState } from 'react';
const CreateTVShow = () => {
const [errors, setErrors] = useState({});
const handleSubmit = () => {
const e = {};
e.title = 'Title is required';
e.genre = 'Genre is required';
e.total = 'Total episodes must be at least 1';
setErrors(e);
};
return (
<div>
<h1>Add TV Show</h1>
<label>Title:</label>
<label>Genre:</label>
<label>Status:</label>
<label>Total Episodes:</label>
<label>Watched Episodes:</label>
<label>Rating (1-10, optional):</label>
<button onClick={handleSubmit}>Add TV Show</button>
<p>{errors.title}</p>
<p>{errors.genre}</p>
<p>{errors.total}</p>
</div>
);
};
export default CreateTVShow;
