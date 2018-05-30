let http = require('http');
let fs = require('fs');


http.createServer((req, res) => {
    fs.createReadStream('image3M.jpg').pipe(res);
}).listen(4000);