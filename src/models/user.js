const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({

    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'ADMIN',
        enum: ['ADMIN','NORMAL'],
    }
    
});
const modeloUsuario = model("User", userSchema);
 module.exports = modeloUsuario;

