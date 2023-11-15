var Microphone = require('../models/microphone');

// List of all Microphones
exports.microphone_list = async function(req, res) {
    try {
        theMicrophones = await Microphone.find();
        res.send(theMicrophones);
    }
    catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Specific costume
exports.microphone_detail = async function(req, res) {
    console.log("detail " + req.params.id);
    try {
        result = await Microphone.findById(req.params.id);
        res.send(result);
    }
    catch(err) {
        res.status(500);
        res.send(`{"Error": document id for id ${req.params.id} not found}`);
    }
};

// Handle microphone create on post
exports.microphone_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Microphone();

    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.microphone_name = req.body.microphone_name;
    document.cost = req.body.cost;
    document.easyToUse = req.body.easyToUse;

    try {
        let result = await document.save()
        res.send(result);
    }
    catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Microphone delete form on DELETE
exports.microphone_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Microphone.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    }
    catch(err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`)
    }
};

// Handle Microphone update form on PUT
exports.microphone_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Microphone.findById(req.params.id)

        // updates of property
        if(req.body.microphone_name)
            toUpdate.microphone_name = req.body.microphone_name
        if(req.body.cost)
            toUpdate.cost = req.body.cost
        if(req.body.easyToUse)
            toUpdate.easyToUse = req.body.easyToUse
        let result = await toUpdate.save()
        console.log("Success " + result)
        res.send(result)
    }
    catch(err) {
        res.status(500)
        res.send(`{"Error": ${err}: Update for id ${req.params.id} failed.}`)
    }
};

// VIEWS
// Handle a show all view
exports.microphone_view_all_Page = async function(req, res) {
    try{
        theMicrophones = await Microphone.find();
        res.render('microphone', { title: 'Microphone Search Results', results: theMicrophones });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle showing one view by query
exports.microphone_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.params.id)
    try {
        result = await Microphone.findById(req.query.id)
        res.render('microphonedetail',
            {title: 'Microphone Detail', toShow: result});
    }
    catch(err) {
        res.status(500)
        res.send(`{"error": ${err}}`);
    }
};

// Handle creating new instance of collection
// No body, no in path parameter, no query
// Does not need to be async
exports.microphone_create_Page = function(req, res) {
    console.log("create view")
    try {
        res.render('microphonecreate', {title: 'Microphone Create'});
    }
    catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);

    }
};

exports.microphone_update_Page = async function(req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Microphone.findById(req.query.id)
        res.render('microphoneupdate', {title: 'Microphone Update', toShow: result});
    }    
    catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};