//tvshowrouters.js
const express = require('express'); const router = express.Router(); const {
getAllTVShows, addTVShow, updateTVShow, deleteTVShow, getTVShowById,
getTVShowsByUserId
} = require('../controllers/tvShowController');
router.post('/all', getAllTVShows); router.post('/add', addTVShow); router.put('/:id', updateTVShow); router.delete('/:id', deleteTVShow); router.get('/:id', getTVShowById);
router.post('/user', getTVShowsByUserId); module.exports = router;
nodeapp//routers//userrouters.js const express = require('express'); const router = express.Router(); const {
getAllUsers, addUser,
getUserByUsernameAndPassword
} = require('../controllers/userController');
router.get('/all', getAllUsers);
router.post('/add', addUser);
router.post('/login', getUserByUsernameAndPassword);
module.exports = router;
