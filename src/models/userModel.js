const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    profileImage: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true,
        minLen: 8,
        maxLen: 15
    },
    address: {
        shipping:{
            street: { type: String, required: true},
            city: { type: String, required: true},
            pincode: { type: String, required: true}
        },
        billing: {
            street: { type: String, required: true},
            city: { type: String, required: true},
            pincode: { type: String, required: true}
        },
    },
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)