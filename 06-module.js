const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const extension = process.argv[3];



module.exports = (dir, extension, callback) => {
    fs.readdir(dir, (err, list) => {
        if(err) {
            return callback(err);
        }
        const filtered = list.filter((item) => {
            const ext = path.extname(item);
            return '.'+extension === ext;
        });
        callback(0, filtered);
    })
}