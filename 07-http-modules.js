const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
    response.setEncoding('utf-8').on('data', (data) => {
        console.log(data);
    })
})

