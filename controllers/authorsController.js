const { readAuthors, writeAuthors } = require('../models/authorsModel');
const { v4: uuidv4 } = require('uuid');
const format = require('../views/responseFormatter');

function getAuthors() {
  const authors = readAuthors();
  return format.success(authors);
}

function addAuthor(command) {
  const [, name, nationality] = command.split('|');
  const authors = readAuthors();
  authors.push({ id: uuidv4(), name, nationality });
  writeAuthors(authors);
  return format.success('Autor añadido');
}

module.exports = { getAuthors, addAuthor };