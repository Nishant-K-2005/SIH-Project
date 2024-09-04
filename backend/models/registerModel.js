const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
<<<<<<< HEAD
    rollno: {
        type: Number,
=======
    rollno : {
        type: String,
>>>>>>> 52c513c3338c13e9d52ebd3c2a22847cfd1074a2
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    cndtName: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
<<<<<<< HEAD
    yearofpassing: {
        type: Number,
=======
    yearofpassing : {
        type : String,
>>>>>>> 52c513c3338c13e9d52ebd3c2a22847cfd1074a2
        required: true
    },
    board: {
        type: String,
        required: true
    },
    aadharcard: {
        type: String,
        required: true
    },
    familyincome: {
        type: String,
        required: true
    },
    isDomicile: {
        type: Boolean,
        required: true
    },
    cuet: {
        type: Boolean,
    },
    cuetNum: {
        type: String
    },
    neet: {
        type: Boolean,
    },
    neetNum: {
        type: String
    },
    jee: {
        type: Boolean,
    },
    jeeNum: {
        type: String
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    resetToken: { type: String },
    resetTokenExpiry: { type: Date }
});

module.exports = mongoose.model('register', registerSchema);