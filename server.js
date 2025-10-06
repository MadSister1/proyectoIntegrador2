const net = require('net');
const booksController = require('./controllers/booksController');
const authorsController = require('./controllers/authorsController');
const publishersController = require('./controllers/publishersController');
const format = require('./views/responseFormatter');

const server = net.createServer(socket => {
  socket.on('data', data => {
    const command = data.toString().trim();
    let response;

    try {
      if (command === 'GET BOOKS') response = booksController.getBooks();
      else if (command.startsWith('ADD BOOK')) response = booksController.addBook(command);
      else if (command === 'GET AUTHORS') response = authorsController.getAuthors();
      else if (command.startsWith('ADD AUTHOR')) response = authorsController.addAuthor(command);
      else if (command === 'GET PUBLISHERS') response = publishersController.getPublishers();
      else if (command.startsWith('ADD PUBLISHER')) response = publishersController.addPublisher(command);
      else response = format.error('Comando no reconocido');
    } catch (err) {
      response = format.error('Error interno: ' + err.message);
    }

    socket.write(response);
  });
});

server.listen(8080, () => console.log('Servidor TCP en puerto 8080'));