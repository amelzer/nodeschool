const http = require('http');
const url = require('url');
const moment = require('moment');

const port = process.argv[2];


const server = http.createServer((request, res) =>{
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const iso = url.parse(request.url, true).query.iso;
    console.log(url.parse(request.url, true).query.iso);

    const date = moment(iso);


    if(url.parse(request.url).pathname == '/api/parsetime') {
        return res.end(JSON.stringify({
            "hour": parseInt(date.format('HH')),
            "minute": parseInt(date.format('mm')),
            "second": parseInt(date.format('ss'))
        }));
    }

    if(url.parse(request.url).pathname == '/api/unixtime') {
        return res.end(JSON.stringify({
            "unixtime": parseInt(date.valueOf())
        }));
    }

    return res.end('error\n');
});
server.listen(parseInt(port));