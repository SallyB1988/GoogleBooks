const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  authors: {type: [String], required: true },
  image: {type: String },
  link: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
