const mongoose = require("mongoose");

let Schema = new mongoose.Schema({
    userId: String,
    coins: Number,


})

module.exports = mongoose.model('', Schema)
