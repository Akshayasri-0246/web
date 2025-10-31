//tvShowcontroller.js


const TVShow = require('../models/tvShowModel');
// ⬛ GET ALL TV SHOWS
const getAllTVShows = async (req, res) => { try {
const { sortOrder } = req.body;
const shows = await TVShow.find().sort({ title: sortOrder || 1 }); res.status(200).json(shows);
} catch (err) {
res.status(500).json({ message: err.message });
}
};
// ⬛ ADD TV SHOW
const addTVShow = async (req, res) => { try {
await TVShow.create(req.body);
res.status(200).json({ message: 'TV Show Added Successfully' });
} catch (err) {
res.status(500).json({ message: err.message });
}
};
// ⬛ UPDATE TV SHOW
const updateTVShow = async (req, res) => { try {
const updated = await TVShow.findByIdAndUpdate(req.params.id, req.body, { new: true }); if (!updated) return res.status(404).json({ message: 'TV show not found' });
res.status(200).json({ message: 'TV Show Updated Successfully' });
} catch (err) {
res.status(500).json({ message: err.message });
}
};
// ⬛ DELETE TV SHOW
const deleteTVShow = async (req, res) => { try {
const deleted = await TVShow.findByIdAndDelete(req.params.id);
if (!deleted) return res.status(404).json({ message: 'TV show not found' }); res.status(200).json({ message: 'TV Show Deleted Successfully' });
} catch (err) {
res.status(500).json({ message: err.message });
}
};
// ⬛ GET TV SHOW BY ID
const getTVShowById = async (req, res) => { try {
const show = await TVShow.findById(req.params.id);
if (!show) return res.status(404).json({ message: 'TV show not found' }); res.status(200).json(show);
} catch (err) {
res.status(500).json({ message: err.message });
}
};
// ⬛ GET TV SHOWS BY USER ID
const getTVShowsByUserId = async (req, res) => { try {
const { userId, status } = req.body;
const shows = await TVShow.find({ userId, status }); res.status(200).json(shows);
} catch (err) {
res.status(500).json({ message: err.message });
}
};
module.exports = { getAllTVShows, addTVShow, updateTVShow, deleteTVShow, getTVShowById,
getTVShowsByUserId
};
