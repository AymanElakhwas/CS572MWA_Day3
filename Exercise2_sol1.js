// load the whole image file in memory (obviously not the best performance)

let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('image3M.jpg', (err, data) => {
        res.end(data);
    });
}).listen(4000);