var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var microphone_controller = require('../controllers/microphone');

/// API ROUTE ///

// GET resources base.
router.get('/', api_controller.api);

/// MICROPHONE ROUTES ///

// POST request for creating a microphone.
router.post('/microphones', microphone_controller.microphone_create_post);

// DELETE request to delete microphone.
router.delete('/microphones/:id', microphone_controller.microphone_delete);

// PUT request to update microphone.
router.put('/microphones/:id', microphone_controller.microphone_update_put);

// GET request for one microphone.
router.get('/microphones/:id', microphone_controller.microphone_detail);

// GET request for list of all microphone items.
router.get('/microphones', microphone_controller.microphone_list);

module.exports = router;