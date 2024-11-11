// const express = require('express');
// const WebSocket = require('ws');

// const router = express.Router();

// // WebSocket server setup
// const wss = new WebSocket.Server({ port: 8080 });

// wss.on('connection', function connection(ws) {
//     console.log('A new client connected');

//     ws.on('message', function incoming(message) {
//         console.log('received: %s', message[0]);
//         ws.send(`اين يك پاسخ تست از سمت فرانت است و شما اين پيام را ارسال كرده ايد ${message}`);
//     });

//     ws.on('close', function close() {
//         console.log('Client disconnected');
//     });
// });

// module.exports = router;