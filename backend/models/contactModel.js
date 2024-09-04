const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    mobileNumber: {
        type: String,
        required: true
    },
    alternateMobileNumber: { type: String },
    emailAddress: {
        type: String,
        required: true,
        unique: true
    },
    alternateEmailAddress: { type: String },
    permanentAddress: {
        houseNo: { type: String },
        street: { type: String },
        villageTehsilBlock: { type: String },
        addressLine: { type: String, required: true },
        state: { type: String, required: true },
        district: { type: String, required: true },
        city: { type: String, required: true },
        pinCode: { type: String, required: true }
    },
    currentAddress: {
        houseNo: { type: String },
        street: { type: String },
        villageTehsilBlock: { type: String },
        addressLine: { type: String },
        state: { type: String },
        district: { type: String },
        city: { type: String },
        pinCode: { type: String }
    }
});

module.exports = mongoose.model('contact', contactSchema);