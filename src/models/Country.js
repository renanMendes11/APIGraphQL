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

    // estados: {
    //     type: mongoose.Schema.Types.Array,
    //     ref: 'State',
    //     required: true
    // }

    // estados: {
    //     type: Array,
    //     ref: 'State',
    //     required: true
    // }

});

export default mongoose.model('Country', Schema);