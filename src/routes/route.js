const express = require('express');
const router = express.Router();

//// IMPORTING CONTROLLERS  /////
const { createUser, userLogin, getDetails }= require("../controller/userController");


//////

router.post('/register', createUser)
router.post("/login", userLogin)
router.get('/user/:userId/profile', getDetails)


module.exports = router;
