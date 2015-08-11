var express = require('express');
var router = express.Router();
// var jwt = require('express-jwt');
// var auth = jwt({
//   secret: process.env.JWT_SECRET,
//   userProperty: 'payload'
// });

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

// profile
router.get('/profile/:userid', ctrlProfile.profileRead);
router.put('/profile/:userid', ctrlProfile.profileUpdate);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
