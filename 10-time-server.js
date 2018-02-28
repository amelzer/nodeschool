const net = require('net');
const moment = require('moment');
const port = process.argv[2];

const server = net.createServer(socket =>{
    /*socket.on('listening', (data) => {
        const date = new Date();
        const formated = `${date.getFullYear()}-Test`;
        socket.end(formated);
    });*/
    const formated = moment().format('YYYY-MM-DD HH:mm'); // December 14th 2017, 1:13:12 pm

    socket.end(formated+'\n');
});
server.listen(parseInt(port));