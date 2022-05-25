const express = require('express');
const router = express.Router();

//// IMPORTING CONTROLLERS  /////
const { createUser, userLogin, getDetails, updateUser }= require("../controller/userController");


////// API ///////

router.post('/register', createUser)
router.post("/login", userLogin)
router.get('/user/:userId/profile', getDetails)
router.put('/user/:userId/profile', updateUser)


module.exports = router;
