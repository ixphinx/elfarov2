const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const userSchema = new Schema({
    nombre: String,
    apellido: String,
    pais: String,
    ciudad: String,
    direccion: String,
    cp: String,
    telefono: String,
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
    paypal: String,
    perfil: String,
    portada : String,
    img2: String,
    img3: String,
    img4: String,
    img5: String,
    img6: String,
    img7: String,
    img8: String,
    img9: String,
    img10: String,
    img11: String,
    img12: String,
    img13: String,
    img14: String,
    img15: String,
    img16: String,
    img17: String,
    img18: String,
    img19: String,
    img20: String,
    img21: String,
    img22: String,
    img23: String,
    img24: String,
    img25: String,
    img26: String,
    img27: String,
    img28: String,
    img29: String,
    img30: String,
    vimg1: String,
    vimg2: String,
    vimg3: String,
    vimg4: String,
    vimg5: String,
    vimg6: String,
    vimg7: String,
    vimg8: String,
    vimg9: String,
    vimg10: String,
    vimg11: String,
    vimg12: String,
    vimg13: String,
    vimg14: String,
    vimg15: String,
    vimg16: String,
    vimg17: String,
    vimg18: String,
    vimg19: String,
    vimg20: String,
    vimg21: String,
    vimg22: String,
    vimg23: String,
    vimg24: String,
    vimg25: String,
    vimg26: String,
    vimg27: String,
    vimg28: String,
    vimg29: String,
    vimg30: String
    
});

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('user', userSchema);