// DisplayTVShows.jsx


import React from 'react';
const DisplayTVShows = ({ shows = [] }) => {
return (
<div>
<h1>TV Show Catalog</h1>
<button>Logout</button>
<select defaultValue="Sort by Title (A-Z)">
<option>Sort by Title (A-Z)</option>
<option>Sort by Genre</option>
<option>Sort by Rating</option>
</select>
<table>
<thead>
<tr>
<th>Title</th>
<th>Genre</th>
<th>Status</th>
<th>Progress</th>
<th>Rating</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{shows.length === 0 ? (
<tr>
<td colSpan="6">
<p>No TV shows found</p>
</td>
</tr>
) : (
shows.map((s, i) => (
<tr key={i}>
<td>{s.title}</td>
<td>{s.genre}</td>
<td>{s.status}</td>
<td>{s.progress}</td>
<td>{s.rating}</td>
<td>Edit</td>
</tr>
))
)}
</tbody>
</table>
</div>
);
};
export default DisplayTVShows;
