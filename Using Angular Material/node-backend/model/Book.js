const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the book model
const bookSchema = new Schema({
  Name: {
    type: String
  },
  price: {
    type: String
  },
  description: {
    type: String
  },
  food_type: {
    type: String
  }
}, {
  collection: 'books'
});

// Create and export the Book model
const Book = mongoose.model('Book', bookSchema);

// Export the Book model
module.exports = Book;
