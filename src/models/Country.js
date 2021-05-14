import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    
    siglaPais: {
        type: String,
        required: true
    },

    capital: {
        type: String,
        required: true
    },

    estados: []

});

export default mongoose.model('Country', Schema);