const mongoose = require("mongoose")
const microphoneSchema = mongoose.Schema({
    microphone_name: {type: String, lowercase: true},
    cost: { type: Number, min: 0, max: 1500 },
    easyToUse: Boolean
})

module.exports = mongoose.model("Microphone", microphoneSchema)