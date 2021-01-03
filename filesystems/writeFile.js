const fs = require("fs"); 

const md =`

#this is a file 

we can write some text cool

*fs.readdir
*fs.readFile
*fs.writeFile


`;

fs.writeFile('./assets/notes.md', md.trim(), err => {
    if(err){
        throw err
    }
    console.log('file saved')
})