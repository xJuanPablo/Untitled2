const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:Deltaforc1@cluster0.dns4ylm.mongodb.net/untitled2');

module.exports = mongoose.connection;