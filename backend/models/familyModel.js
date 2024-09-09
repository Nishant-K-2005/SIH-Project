const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel',
    required: true
  },
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherDesignation: { type: String },
  fImage: { type: String, required: true},
  motherName: { type: String, required: true },
  motherOccupation: { type: String },
  motherDesignation: { type: String },
  mImage: { type: String, required: true},
  familyAnnualIncome: { type: String, required: true }
});

module.exports = mongoose.model('family', familySchema);