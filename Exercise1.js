let dns = require('dns');

let translate = function(domain, callback){
    return dns.resolve4(domain, callback);
}

translate('www.mum.edu', (err, data)=> console.log(data));