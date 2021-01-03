const collectAnswers = require('./lib/collectAnswers');

const questions = [
    'what is your name', 
    'where you live',
    "what you'll dou with node"
]

collectAnswers(questions, answers => {
    console.log('thank you for your answer');
    console.log("🚀 ~ answers", answers);
    process.exit();
}); 