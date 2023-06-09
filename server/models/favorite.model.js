const mongoose = require('mongoose');
const User = require('./user.model');

const favoriteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    movieId: {
        type: Number,
    },
});

// add unique compound index to prevent duplicate favorites
favoriteSchema.index({ userId: 1, movieId: 1 }, { unique: true });

module.exports = mongoose.model('Favorite', favoriteSchema);
