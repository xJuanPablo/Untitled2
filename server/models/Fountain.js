const mongoose = require('mongoose');

const { Schema } = mongoose;

const fountainSchema = new Schema({
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true,
    trim: true,
  },
  Place: {
    type: String,
  },
  City: {
    type: String,
    required: true
  },
  State: {
    type: String,
    required: true
  },
  datePosted: {
    type: Date,
    default: Date.now
  },
  Image: {
    type: String,
    required: true,
    trim: true
  },
  // added postAuthor to link with context user when adding a fountain
  postAuthor: {
    type: String,
    trim: true,
  }
});

const Fountain = mongoose.model('Fountain', fountainSchema);

module.exports = Fountain;