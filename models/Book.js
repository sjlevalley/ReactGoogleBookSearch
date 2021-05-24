const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    title: { type: String, required: true },
    authors: [{ type: String, required: true }],
    description: { type: String },
    // date: { type: Date },
    imageLinks: { type: String },
    infoLink: { String }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;