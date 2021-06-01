const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    miembros: {
        type: Array,
        required: true
    },
    mensajes: {
        type: Array
    },
    isActive: {
        type: Boolean,
        default: true
    }
});


const Room = mongoose.model('Room', roomSchema);
module.exports = Room;