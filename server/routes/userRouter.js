const express = require('express');
const router = express.Router();
const {getAllUsers,getUser} = require('../controllers/userController')

router.get('/',getAllUsers)
router.get('/:userId',getUser)

module.exports = router;
