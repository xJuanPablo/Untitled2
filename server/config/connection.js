const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || '/untitled2');

module.exports = mongoose.connection;