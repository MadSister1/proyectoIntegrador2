const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/publishers.json');

function readPublishers() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writePublishers(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { readPublishers, writePublishers };