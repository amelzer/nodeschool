const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const extension = process.argv[3];

fs.readdir(dir, (err, list) => {
    if(err) {
        return;
    }
    const filtered = list.filter((item) => {
        const ext = path.extname(item);
        return '.'+extension === ext;
    });

    filtered.map(item => console.log(item));
})