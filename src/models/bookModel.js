const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    categories: String,
    year: Number
},  {
    bookName: String,
    authorName: String,
    categories: String,
    year: Number
    },

    {
    bookName: String,
    authorName: String,
    categories: String,
    year: Number
    },
{ timestamps: true });

module.exports = mongoose.model('book', bookSchema)
