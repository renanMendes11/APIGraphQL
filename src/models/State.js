import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    
    siglaEstado: {
        type: String,
        required: true
    },

    pais: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country',
        required: true
    }

});

export default mongoose.model('State', Schema);