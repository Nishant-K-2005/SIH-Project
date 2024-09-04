const mongoose = require('mongoose');

// Define the schema for candidate details

const userSchema = new mongoose.Schema({
  registerID : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'registerModel',
    required: true
  },
  candidateId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  domicileJandK: {
    type: Boolean,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  casteCategory: {
    type: String,
    required: true
  },
  subCasteCategory: {
    type: String
  },
  physicallyDisability: {
    type: Boolean
  },
  aadharDetails: {
    type: String,
    required: true,
    unique: true
  }
});


module.exports = mongoose.model('user', userSchema);