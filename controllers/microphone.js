var Microphone = require('../models/microphone');

// List of all Microphones
exports.microphone_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Microphone list');
};

// Specific costume
exports.microphone_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Microphone detail: ' + req.params.id);
};

// Handle microphone create on post
exports.microphone_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Microphone create POST');
};

// Handle Microphone delete form on DELETE
exports.microphone_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Microphone delete DELETE ' + req.params.id);
};

// Handle Microphone update form on PUT
exports.microphone_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Microphone uptade PUT ' + req.params.id);
};