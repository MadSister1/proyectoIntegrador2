const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/books.json');

function readBooks() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeBooks(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { readBooks, writeBooks };