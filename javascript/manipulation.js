

// console.log(liElelementsAnswers.length);
// console.log(liElelementsAnswers[0].innerText);

let scoreNumber = document.querySelector('.numbers')
scoreNumber.textContent = 0
let nextQuestion = document.querySelector('.next-question')

let questionHeader = document.querySelector('.question')
let liElelementsAnswers = document.querySelectorAll('li')


let fillTheQuestionsAndAnswers = (questionsFromFile) => {
    liElelementsAnswers[0].setAttribute('id','first')
    liElelementsAnswers[1].setAttribute('id','second')
    liElelementsAnswers[2].setAttribute('id','third')
    liElelementsAnswers[3].setAttribute('id','fourth')

    questionHeader.textContent = questionsFromFile.question
    liElelementsAnswers[0].innerHTML = questionsFromFile.answer1
    liElelementsAnswers[1].innerHTML = questionsFromFile.answer2
    liElelementsAnswers[2].innerHTML = questionsFromFile.answer3
    liElelementsAnswers[3].innerHTML = questionsFromFile.answer4
    
    
    if(checkAnswers()){
        let theRandom = makeRandomQuestion()
        fillTheQuestionsAndAnswers(theRandom)
    }
}


const makeRandomQuestion = () => {
    let randomQuestion = arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)]
    return randomQuestion
}

let theRandom = makeRandomQuestion()

nextQuestion.addEventListener('click', function() {
    theRandom = makeRandomQuestion();
    fillTheQuestionsAndAnswers(theRandom)
})
console.log(theRandom);

const checkAnswers = () => {

    document.getElementById('first').addEventListener('click', function() {
        if (theRandom.correctAnswer === document.getElementById('first').textContent) {
            scoreNumber.textContent++
            console.log("Correct!");
        } else {
            scoreNumber.textContent--
            console.log("Incorrect!");

        }
    }, {once : true});
    
    document.getElementById('second').addEventListener('click', function() {
        if (theRandom.correctAnswer === document.getElementById('second').textContent) {
            scoreNumber.textContent++
            console.log("Correct!");
            
        } else {
            scoreNumber.textContent--
            console.log("Incorrect!");
        }
        
    }, {once : true});
    
    document.getElementById('third').addEventListener('click', function() {
        if(theRandom.correctAnswer === document.getElementById('third').textContent) {
            scoreNumber.textContent++
            console.log("Correct!");
            
        } else {
            scoreNumber.textContent--
            console.log("Incorrect!");
        }
    }, {once : true});

    document.getElementById('fourth').addEventListener('click', function() {
        if(theRandom.correctAnswer === document.getElementById('fourth').textContent) {
            scoreNumber.textContent++
            console.log("Correct!");
        } else {
            scoreNumber.textContent--
            console.log("Incorrect!");
        } 
    }, {once : true});
}


fillTheQuestionsAndAnswers(theRandom)


