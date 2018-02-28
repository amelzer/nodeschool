const fs = require('fs');

const filename = process.argv[2];

const fileBuffer = fs.readFile(filename, (err, data) => {
    if(err){
        return;
    }
    const lines = data.toString().split('\n');
    console.log(lines.length-1);
});
