const http = require('http');
const bl = require('bl');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

const print = (response) => {
    response.pipe(bl(function (err, data) { // note 'new' isn't strictly required
    // `data` is a complete Buffer object containing the full data
    //console.log(data.toString().length);
        return data.toString();
    }));
};

const fetch = (url) => {
    return new Promise((resolve, reject) => {
    http.get(url, (response) => {
        response.pipe(bl(function (err, data) { // note 'new' isn't strictly required
        // `data` is a complete Buffer object containing the full data
        //console.log(data.toString().length);
        //console.log(data.toString())
            resolve(data.toString());
         }));
    });
});
};

//console.log(fetch(url1));


Promise.all([fetch(url1), fetch(url2), fetch(url3)]).then((values) => {
    values.map(value => console.log(value));
});