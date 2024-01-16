const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     username: { type: String, required: true, trim: true },
     password: { type: String, required: true, trim: true },
     firstname: { type: String, required: true, trim: true },
     lastname: { type: String, required: true, trim: true }
});

const User = mongoose.model('LoginUsers', userSchema);

module.exports = User;
