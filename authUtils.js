nodeapp//authUtils.js
const jwt = require('jsonwebtoken'); const validateToken = (req, res, next) => { try {
const token = req.header('Authorization'); if (!token) throw new Error('Invalid');
jwt.verify(token, 'secretkey', (err) => { if (err) throw new Error('Invalid'); next();
});
} catch {
res.status(400).json({ message: 'Authentication failed' });
}
};
module.exports = { validateToken };
