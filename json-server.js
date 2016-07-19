"use strict";

const http = require('http');
const url = require('url');

let server = http.createServer((request, response) => {
    var urlObject = url.parse(request.url, true),
        date = new Date(urlObject.uery.iso);

    response.writeHead(200, { 'Content-type': 'application/json' });

    if (urlObject.pathname === '/api/parsetime') {
        response.end(JSON.stringify({
            hour  : date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }));
    }

    if (urlObject.pathname === '/api/unixtime') {
        response.end(JSON.stringify({
            unixtime: date.getTime()
        }));
    }
});

server.listen(process.argv[2]);