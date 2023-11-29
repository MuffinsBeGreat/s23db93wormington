var express = require('express');
const microphone_controllers = require('../controllers/microphone');
const { rawListeners } = require('../models/account');
var router = express.Router();

// Function to check if we have an authorized user and continue or redirect to login
const secured = (req, res, next) => {
    if(req.user) {
        return next();
    }
    res.redirect('/login');
}

/* GET home page. */
router.get('/', microphone_controllers.microphone_view_all_Page);
router.get('/detail', microphone_controllers.microphone_view_one_Page);
router.get('/create', microphone_controllers.microphone_create_Page);
router.get('/update', secured, microphone_controllers.microphone_update_Page);
router.get('/delete', microphone_controllers.microphone_delete_Page);
module.exports = router;
