const express = require('express');
const router = express.Router();
const {getAllRooms,getRoom,updateRoom} = require('../controllers/roomController.js')

router.get('/',getAllRooms)
router.get('/:roomId',getRoom)
router.put('/:id',updateRoom)

module.exports = router;
