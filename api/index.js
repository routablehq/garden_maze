const http = require('http');
const socketIO = require('socket.io');
const app = require('./app');

const server = http.createServer(app);

const hostname = '127.0.0.1';
const port = 8080;

const io = socketIO(server);

server.listen(port, hostname, () => {
  console.log(`Server running on port ${hostname}:${port}`);
});

io.on('connection', (socket) => {
  console.log('connection', socket);
  
  socket.emit('message1', 'message1');
  
  setTimeout(() => {
    socket.emit('message2', 'message2');
  }, 2000);
  
  socket.on('message2', (payload) => {
    console.log('message2', payload)
    return { hi: 'hello' };
  });
});
