const http = require('http');
var map = require('through2-map');
const port = process.argv[2];


const server = http.createServer((request, response) =>{

    request.pipe(map((chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(response)
    
});
server.listen(parseInt(port));