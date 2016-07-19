"use strict";

const net = require('net');
const strftime = require('strftime');

let server = net.createServer(function (socket) {
    var date = strftime('%Y-%m-%d %H:%M', new Date());

    socket.end(date + '\n');
});

server.listen(process.argv[2]);

