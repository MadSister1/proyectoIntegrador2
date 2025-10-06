const net = require('net');
const client = net.createConnection({ port: 8080 }, () => {
  console.log('Conectado al servidor');
  process.stdin.on('data', data => client.write(data.toString()));
});

client.on('data', data => console.log('Respuesta:', data.toString()));
client.on('end', () => console.log('Desconectado del servidor'));