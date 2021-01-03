const wait = 5000; 
const waitInt = 500;
let curr = 0; 


console.log("🚀 ~ wait", `${wait / 1000} second delay`);

const timerDone = () => {
    clearInterval(interval)
    process.stdout.clearLine(); 
    process.stdout.cursorTo(0);
    console.log('done')
}; 

const incTime = () => { 
    curr += waitInt;
    const p = Math.floor((curr/wait) * 100);
    process.stdout.clearLine(); 
    process.stdout.cursorTo(0 );
    process.stdout.write(`waiting...${p}%`)
}
setTimeout(timerDone, wait); 

const interval = setInterval(incTime, waitInt);