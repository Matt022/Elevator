

// console.log(liElelementsAnswers.length);
// console.log(liElelementsAnswers[0].innerText);

let scoreNumber = document.querySelector('.numbers')
scoreNumber.textContent = 0


let questionHeader = document.querySelector('.question')
let liElelementsAnswers = document.querySelectorAll('li')

liElelementsAnswers[0].setAttribute('id','first')
liElelementsAnswers[1].setAttribute('id','second')
liElelementsAnswers[2].setAttribute('id','third')
liElelementsAnswers[3].setAttribute('id','fourth')

let fillTheQuestionsAndAnswers = (questionsFromFile) => {

    questionHeader.textContent = questionsFromFile.question
    liElelementsAnswers[0].innerHTML = questionsFromFile.answer1
    liElelementsAnswers[1].innerHTML = questionsFromFile.answer2
    liElelementsAnswers[2].innerHTML = questionsFromFile.answer3
    liElelementsAnswers[3].innerHTML = questionsFromFile.answer4
    
    
    document.getElementById('first').addEventListener('click', function() {
        if (questionsFromFile.correctAnswer === document.getElementById('first').textContent) {
            scoreNumber.textContent++
            let randomQuestion = fillTheQuestionsAndAnswers(arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)])
            console.log("Correct!");
        } else {
            let randomQuestion = fillTheQuestionsAndAnswers(arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)])
            console.log("Incorrect!");

        }
    });
    
    document.getElementById('second').addEventListener('click', function() {
        if (questionsFromFile.correctAnswer === document.getElementById('second').textContent) {
            scoreNumber.textContent++
            let randomQuestion = fillTheQuestionsAndAnswers(arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)])
            console.log("Correct!");
            
        } else {
            let randomQuestion = fillTheQuestionsAndAnswers(arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)])
            console.log("Incorrect!");
        }
        
    });
    
    document.getElementById('third').addEventListener('click', function() {
        if(questionsFromFile.correctAnswer === document.getElementById('third').textContent) {
            scoreNumber.textContent++
            let randomQuestion = fillTheQuestionsAndAnswers(arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)])
            console.log("Correct!");
            
        } else {
            let randomQuestion = fillTheQuestionsAndAnswers(arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)])
            console.log("Incorrect!");
            
            
        }
    });

    document.getElementById('fourth').addEventListener('click', function() {
        if(questionsFromFile.correctAnswer === document.getElementById('fourth').textContent) {
            scoreNumber.textContent++
            let randomQuestion = fillTheQuestionsAndAnswers(arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)])
            console.log("Correct!");

        } else {
            
            let randomQuestion = fillTheQuestionsAndAnswers(arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)])
            console.log("Incorrect!");
            
        } 
    });
   
    
    
}





let randomQuestion = arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)]


