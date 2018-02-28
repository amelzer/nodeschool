const fs = require('fs');

const filename = process.argv[2];

const fileBuffer = fs.readFileSync(filename);
const lines = fileBuffer.toString().split('\n');
console.log(lines.length-1);