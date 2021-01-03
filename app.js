const {inc, dec, getCount} = require('./myModule');

inc();
inc();
inc();
dec(); 

console.log("🚀 ~ dec", dec);
console.log("🚀 ~ counter", getCount())

