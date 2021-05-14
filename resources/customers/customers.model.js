const mongoose = require ("mongoose");

let customerSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlenght: 120,
        required: true
    },
    email:{
        type: String,
        minlength: 3,
        maxlenght: 120,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Introduzca un correo valido']
    },
    contacted:{
        type: Boolean,
        default: false
    },
    photoURL: {
        type: String,
    }    
});

let customer = mongoose.model("customer", customerSchema);

module.exports = customer;