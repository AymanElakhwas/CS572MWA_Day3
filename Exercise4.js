let fs = require('fs');
let zlib = require('zlib');




function zipFile(fileName) {
    name = fileName.split(".")[0];
    let out = fs.createWriteStream(name + ".txt.gz");
    let gzip = zlib.createGzip();
    fs.createReadStream(fileName).pipe(gzip).pipe(out);
}

function unzipFile(fileName) {
    name = fileName.split(".")[0];
    let out = fs.createWriteStream(name + ".txt1");
    let gunzip = zlib.createGunzip();
    fs.createReadStream(fileName).pipe(gunzip).pipe(out);
}

// Uncomment only one of the following at a time

//zipFile("test.txt");

//unzipFile("test.txt.gz");