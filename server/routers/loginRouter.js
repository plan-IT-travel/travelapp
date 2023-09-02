const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// check every incoming request, 
// check for a cookie before any request
// create a middleware that handles checking for cookies

router.post('/', loginController.createUser, (req, res) => { 
    console.log('saved user to database');
    return res.status(201);
});


router.post('/',
loginController.getUser,
(req, res) => res.status(200).json({}));





module.exports = router;