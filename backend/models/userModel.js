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
  userImage: {
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
  physicallyDisability: {
    type: Boolean
  },
  aadharDetails: {
    type: String,
    required: true,
    unique: true
  },
  familyDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'familyModel'
  },
  contactDetails: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'contactModel'
  }
});


module.exports = mongoose.model('user', userSchema);