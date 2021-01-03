const path = require('path'); 

const dirUpload = path.join(__dirname, 'www', 'files', 'uploads'); 
console.log("🚀 ~ dirUpload", dirUpload);

const {log} = require('util'); 

util.log(path.basename(__filename)); 

util.log( " ^ the name of current file"); 

const v8 = require('v8'); 

util.log(v8.getHeapStatistics())