const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, (error, files) => {
        if (error) {
            callback(error);
            return;
        }

        callback(null, files.filter(file => path.extname(file).substring(1) === ext));
    });
};

