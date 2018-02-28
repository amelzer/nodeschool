const filter = require('./06-module.js');
const dir = process.argv[2];
const extension = process.argv[3];

filter(dir, extension, (err, data) => {
    data.map(item => console.log(item));
})