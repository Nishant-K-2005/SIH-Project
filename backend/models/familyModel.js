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
  motherName: { type: String, required: true },
  motherOccupation: { type: String },
  motherDesignation: { type: String },
  familyAnnualIncome: { type: String, required: true }
});

module.exports = mongoose.model('family', familySchema);