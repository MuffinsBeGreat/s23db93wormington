var express = require('express');
const microphone_controllers = require('../controllers/microphone');
var router = express.Router();

/* GET home page. */
router.get('/', microphone_controllers.microphone_view_all_Page);
router.get('/detail', microphone_controllers.microphone_view_one_Page);
router.get('/create', microphone_controllers.microphone_create_Page);
router.get('/update', microphone_controllers.microphone_update_Page);
module.exports = router;
