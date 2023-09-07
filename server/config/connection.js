const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || `${process.env.MONGO_CONNECT}untitled2`);

module.exports = mongoose.connection;