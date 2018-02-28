const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, (response) => {
    response.pipe(bl(function (err, data) { // note 'new' isn't strictly required
    // `data` is a complete Buffer object containing the full data
    console.log(data.toString().length);
    console.log(data.toString())
  }));
});

