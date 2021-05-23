const mongoose = require("mongoose");

module.exports = () => mongoose.connect('mongodb://localhost/google_books_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
