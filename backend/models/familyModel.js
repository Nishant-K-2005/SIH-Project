const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({
    father: {
      name: { type: String, required: true },
      occupation: { type: String, required: true },
      designation: { type: String }
    },
    mother: {
      name: { type: String, required: true },
      occupation: { type: String, required: true },
      designation: { type: String }
    },
    familyAnnualIncome: { type: String, required: true }
});

module.exports = mongoose.model('family', familySchema);