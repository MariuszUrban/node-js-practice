const questions = [
    "what's your  name", 
    "what you prefer to do?", 
    "what's your preferred programming language?",
]; 

const ask = (i=0) => {
    process.stdout.write(`\n\n\nn\n\n\n\n ${questions[i]}` );
    process.stdout.write(`  >  `)
}

ask(); 

const answers = [];

process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length);
    }else{
        process.exit();
    }
})

process.on('exit', ()=>{
    const [name, activity, lang] = answers; 
    console.log(`
 
    thank you for answers. 

    Go ${activity} ${name} you can write ${lang} code later! 

    `)
})