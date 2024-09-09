const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
    },
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

    p_houseNo: { type: String },
    p_street: { type: String },
    p_villageTehsilBlock: { type: String },
    p_district: { type: String, required: true },
    p_city: { type: String, required: true },
    p_state: { type: String, required: true },
    p_pinCode: { type: String, required: true },

    
    c_houseNo: { type: String },
    c_street: { type: String },
    c_villageTehsilBlock: { type: String },
    c_state: { type: String },
    c_district: { type: String },
    c_city: { type: String },
    c_pinCode: { type: String }
});

module.exports = mongoose.model('contact', contactSchema);