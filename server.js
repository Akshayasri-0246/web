//server.js


const express = require('express'); const mongoose = require('mongoose'); const cors = require('cors');
const userRouter = require('./routers/userRouter');
const tvShowRouter = require('./routers/tvShowRouter');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter); app.use('/api/tvshows', tvShowRouter);
mongoose.connect('mongodb://localhost:27017/savorstudio', { useNewUrlParser: true,
useUnifiedTopology: true
});
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
