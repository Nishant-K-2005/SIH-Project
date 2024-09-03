const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    rollno : {
        type: String,
        required: true
    },
    motherName : {
        type: String,
        required: true
    },
    cndtName : {
        type: String,
        required: true
    },
    fatherName : {
        type: String,
        required: true
    },
    yearofpassing : {
        type : String,
        required: true
    },
    board : {
        type: String,
        required: true
    },
    aadharcard : {
        type: String,
        required: true
    },
    familyincome : {
        type: String,
        required: true
    },
    isDomicile : {
        type: Boolean,
        required: true
    },
    cuet : {
        type: String
    },
    cuetNum : {
        type: String
    },
    neet : {
        type: String
    },
    neetNum : {
        type: String
    },
    jee : {
        type: String
    },
    jeeNum : {
        type: String
    },
    mobile : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('register', registerSchema);