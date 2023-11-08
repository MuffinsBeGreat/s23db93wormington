var express = require('express');
const microphone_controllers = require('../controllers/microphone');
var router = express.Router();

/* GET home page. */
router.get('/', microphone_controllers.microphone_view_all_Page);
module.exports = router;
