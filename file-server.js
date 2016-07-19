"use strict";

const http = require('http');
const fs = require('fs');

const path = process.argv[3];

let server = http.createServer(function (request, response){
    fs.createReadStream(path)
        .pipe(response);
});

server.listen(process.argv[2]);