const { readBooks, writeBooks } = require('../models/booksModel');
const { v4: uuidv4 } = require('uuid');
const format = require('../views/responseFormatter');

function getBooks() {
  const books = readBooks();
  return format.success(books);
}

function addBook(command) {
  const [, title, author, publisher] = command.split('|');
  const books = readBooks();
  books.push({ id: uuidv4(), title, author, publisher });
  writeBooks(books);
  return format.success('Libro añadido');
}

module.exports = { getBooks, addBook };