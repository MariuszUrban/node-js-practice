const collectAnswers = require('./lib/collectAnswers');

const questions = [
    'what is your name', 
    'where you live',
    "what you'll dou with node"
]

const answerEvents = collectAnswers(questions); 

answerEvents.on("answer", answer => console.log(`question answered: ${answer}`));

answerEvents.on("complete", answers => {
    console.log('thank you for your answer');
    console.log("🚀 ~ answers", answers);
})

answerEvents.on("complete", () => process.exit() )