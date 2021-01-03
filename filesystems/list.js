const fs = require("fs"); 
console.log('starte read files')
const files = fs.readdir('./assets', (err, files) => {
    
    if(err){
        throw err
    }
    
    console.log('read complete')
    console.log("🚀 ~ files", files);

}); 

