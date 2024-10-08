const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    telegramId: { type: String, required: true, unique: true },
    shares: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', UserSchema);
