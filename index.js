//index.js

const express = require("express"); const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routers/userRouter");
const tvShowRoutes = require("./routers/tvShowRouter");
app.use(express.json());
// Routes
app.use("/api/users", userRoutes); app.use("/api/tvshows", tvShowRoutes);
// MongoDB connection (you can comment out during testing) mongoose.connect("mongodb://127.0.0.1:27017/tvapp", {
useNewUrlParser: true, useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app; // for Jest tests
