const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const dir = process.argv[3];


const server = http.createServer((request, response) =>{
    fs.createReadStream(dir).pipe(response);
});
server.listen(parseInt(port));