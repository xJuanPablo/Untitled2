const mongoose = require('mongoose');

const { Schema } = mongoose;

const fountainSchema = new Schema({
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  place: {
    type: String,
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true

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