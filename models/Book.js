const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 1
    },
    authors: [{
        type: String,
        required: true,
        minLength: 1
    }],
    description: {
        type: String,
        required: true,
        minLength: 1
    },
    image: {
        type: String,
        required: true,
        minLength: 1
    },
    link: {
        type: String,
        required: true,
        minLength: 1
    },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;