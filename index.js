const filter = require('./filter.js');
const dir = process.argv[2];
const ext = process.argv[3];

filter(dir, ext, (error, files) => {
    if (error) {
        console.log('An error occured.');
        return;
    }

    files.forEach(file => {
        console.log(file);
    });
});