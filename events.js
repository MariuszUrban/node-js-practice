const events = require('events'); 

const emitter = new events.EventEmitter(); 

emitter.on("customEvent", (message, user)=> {
console.log("🚀 ~ emiitter.on ~ ", `${user}:`,`${message}`);
})

emitter.emit("customEvent", "hello", "computer"); 
emitter.emit("customEvent", "isn't it cool?", "mario")

process.stdin.on("data", data=>{ 
    const input = data.toString().trim();
    if( input === "exit"){
        emitter.emit("customEvent", "goodbye", "process");
        process.exit()
    }
    emitter.emit("customEvent", input, "terminal")
})