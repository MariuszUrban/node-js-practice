const readline = require("readline");

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = [
    'what is your name', 
    'where you live',
    "what you'll dou with node"
]

const collectAnswers = (questions, done) => {
    const answers = []; 
    const [first] = questions; 
    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered)
        }else{
            done(answers)
        }
    }
    rl.question(first, questionAnswered)
 }

collectAnswers(questions, answers => {
    console.log('thank you for your answer');
    console.log("🚀 ~ answers", answers);
    process.exit();
}); 