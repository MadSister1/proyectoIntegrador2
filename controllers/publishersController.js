const { readPublishers, writePublishers } = require('../models/publishersModel');
const { v4: uuidv4 } = require('uuid');
const format = require('../views/responseFormatter');

function getPublishers() {
  const publishers = readPublishers();
  return format.success(publishers);
}

function addPublisher(command) {
  const [, name] = command.split('|');
  const publishers = readPublishers();
  publishers.push({ id: uuidv4(), name });
  writePublishers(publishers);
  return format.success('Editorial añadida');
}

module.exports = { getPublishers, addPublisher };