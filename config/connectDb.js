const mongoose = require("mongoose");

module.exports = () => mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/google_books_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
