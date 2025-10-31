//usercontroller.js
const User = require('../models/userModel');
// ⬛ GET ALL USERS
const getAllUsers = async (req, res) => { try {
const users = await User.find(); res.status(200).json({ users });
} catch (err) {
res.status(500).json({ message: err.message });
}
};
// ⬛ ADD USER
const addUser = async (req, res) => { try {
await User.create(req.body); res.status(200).json({ message: 'Success' });
} catch (err) {
res.status(500).json({ message: err.message });
}
};
// ⬛ GET USER BY EMAIL AND PASSWORD
const getUserByUsernameAndPassword = async (req, res) => { try {
const user = await User.findOne(req.body);
if (!user) return res.status(200).json({ message: 'Invalid Credentials' }); res.status(200).json(user);
} catch (err) {
res.status(500).json({ message: err.message });
}
};
module.exports = { getAllUsers, addUser,
getUserByUsernameAndPassword
};
