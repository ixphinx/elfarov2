const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artista = Schema({
    nombre: String,
    likes: Number,
    donations: Number
})