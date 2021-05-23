const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    title: { type: String, required: true },
    authors: [{ type: String, required: true }],
    synopsis: { type: String },
    date: { type: Date },
    thumbnail: { type: String },
    link: { String }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;