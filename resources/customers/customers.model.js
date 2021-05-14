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
        match: 'https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)' 
    }    
});

let customer = mongoose.model("customer", customerSchema);

module.exports = customer;