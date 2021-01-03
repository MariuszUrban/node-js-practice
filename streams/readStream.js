const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "utf-8"); 

let fileTxt = ""; 

console.log("type something...");
readStream.on("data", data => {
  console.log(`I read ${data.length - 1} characters of text`);
  fileTxt += data
});


readStream.once("data", data => {
  console.log(data)
})

readStream.on("end", ()=>{
  console.log("i'm done")
  console.log(`i've read ${fileTxt.length - 1}`)
})