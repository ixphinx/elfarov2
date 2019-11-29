const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/database');


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done, name) => {
    const user = await User.findOne({ 'email': email })
    console.log(user)
    if (user) {
        return done(null, false, req.flash('signupMessage', 'The Email is already Taken.'));
    } else {
        const {nombre, apellido}= req.body;
        const newUser = new User ({nombre, apellido, email, password});
        await newUser.save();
    }
}));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await User.findOne({ email: email });
    if (!user) {
        return done(null, false, req.flash('signinMessage', 'No User Found'));
    }
    if (!user.comparePassword(password)) {
        return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
    }
    return done(null, user);
}));