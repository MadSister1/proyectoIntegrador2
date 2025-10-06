const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/authors.json');

function readAuthors() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeAuthors(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { readAuthors, writeAuthors };