"use strict";

const http = require('http');
const bl = require('bl');

const url = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

let getData = function (url) {
    return new Promise(resolve => {
        http.get(url, response => {
            response.pipe(bl((error, data) => {
                resolve(data.toString());
            }));
        });
    });
};

getData(url)
    .then(str => {
        console.log(str);
        return getData(url2);
    })
    .then(str => {
        console.log(str);
        return getData(url3)
    })
    .then(str => {
        console.log(str);
    });