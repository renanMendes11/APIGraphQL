import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    populacao: Number,

    estado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'State',
        required: true
    }

});

export default mongoose.model('City', Schema);