const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const userSchema = new Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    img_perfil: String,
    genero: String,
    facebook: String,
    instagram: String,
    youtube: String,
    f_tecnica: String,
    videos: String,
    imagenes: String,
    musica: String,
    paypal: String
});

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('user', userSchema);