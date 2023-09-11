const mongoose = require('mongoose');

const { Schema } = mongoose;

const fountainSchema = new Schema({
  lat: {
    type: Number,
    trim: true,
  },
  lng: {
    type: Number,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  place: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
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
  // added postAuthor to link with context user when adding a fountain
  postAuthor: {
    type: String,
    trim: true,
  }
});

const Fountain = mongoose.model('Fountain', fountainSchema);

module.exports = Fountain;