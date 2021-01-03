const fs = require("fs"); 

fs.readdirSync('./storage').forEach( fn => {
    fs.unlinkSync(`./storage/${fn}`)
})

fs.rmdir("./storage", err => {
    if(err){
        throw err;
    }
    console.log("removed")
})