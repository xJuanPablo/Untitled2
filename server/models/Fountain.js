const mongoose = require('mongoose');

const { Schema } = mongoose;

const fountainSchema = new Schema({
  address: {
    type: String,
    required: true,
    trim: true,
  },
  datePosted: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  postAuthor: {
    type: String,
    trim: true,
  }
});

const Fountain = mongoose.model('Fountain', fountainSchema);

module.exports = Fountain;