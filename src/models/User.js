import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },
    
    // idade: Int,

    ativado: {
        type: Boolean,
        required: true
    }
});

export default mongoose.model('User', Schema);