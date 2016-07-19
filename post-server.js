"use strict";

const http = require('http');
const map = require('through2-map');

let server = http.createServer(function (request, response) {
    if (request.method !== 'POST') {
        return response.end('Send a post');
    }

    request.pipe(map(chunk => {
            return chunk.toString().toUpperCase();
        }))
        .pipe(response);
});

server.listen(process.argv[2]);