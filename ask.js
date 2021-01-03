const readline = require('readline');
const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('wod you you like it?', answer => {
    console.log(`your answer: ${answer}`)
})

