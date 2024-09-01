const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    rollno : {
        type: Number,
        required: true
    },
    yearofpassing : {
        type : Number,
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