const { PeerServer } = require('peer');
const port = Number(process.env.PORT || 10000);
const server = PeerServer({
  port,
  path: '/peerjs',
  proxied: true,
  allow_discovery: false,
  expire_timeout: 5000,
  alive_timeout: 60000
});
server.on('connection', client => console.log('Peer connected:', client.getId()));
server.on('disconnect', client => console.log('Peer disconnected:', client.getId()));
console.log('TERRACARD PeerServer listening on', port);
