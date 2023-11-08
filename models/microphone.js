const mongoose = require("mongoose")
const microphoneSchema = mongoose.Schema({
    microphone_name: String,
    cost: Number,
    easyToUse: Boolean
})

module.exports = mongoose.model("Microphone", microphoneSchema)