const http = require('http');
const io = require('socket.io');
const api = require('./api');
const sockets = require('./sockets');

const httpServer = http.createServer(api);
const socketServer = io(httpServer);
const PORT = 3000;

httpServer.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
	sockets.listen(socketServer);
});
