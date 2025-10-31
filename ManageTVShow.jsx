//ManageTVShow.jsx


import React from 'react';
const ManageTVShow = () => (
<div>
<h1>Manage TV Shows</h1>
<button>Add TV Show</button>
<button>Logout</button>
<select defaultValue="All Statuses">
<option>All Statuses</option>
<option>Watched</option>
<option>Watching</option>
<option>Planned</option>
</select>
<table>
<thead>
<tr>
<th>Title</th>
<th>Genre</th>
<th>Status</th>
<th>Progress</th>
<th>Rating</th>
<th>Actions</th>
</tr>
</thead>
</table>
<p>No TV shows found</p>
</div>
);
export default ManageTVShow;
