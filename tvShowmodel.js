//tvShowmodel.js
const mongoose = require('mongoose');
const tvShowSchema = new mongoose.Schema({ title: {
type: String, required: true,
maxlength: [150, 'Title cannot exceed 150 characters']
},
genre: { type: String,
required: true,
enum: ['Drama', 'Comedy', 'Action', 'Thriller', 'Sci-Fi', 'Horror']
},
status: { type: String,
required: true,
enum: ['Completed', 'Currently Watching', 'Plan to Watch', 'Dropped']
},
totalEpisodes: { type: Number, required: true,
min: [1, 'Total episodes must be at least 1']
},
watchedEpisodes: { type: Number, required: true,
min: [0, 'Watched episodes cannot be negative']
},
rating: {
type: Number, required: true,
min: [1, 'Rating must be at least 1'], max: [10, 'Rating cannot exceed 10']
},
userId: {
type: mongoose.Schema.Types.ObjectId, required: true,
ref: 'User'
}
});
module.exports = mongoose.model('TVShow', tvShowSchema);
