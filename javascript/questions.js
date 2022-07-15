class Quiz {
    constructor(question, answer1, answer2, answer3, answer4, correctAnswer) {
        this.question = question
        this.answer1 = answer1
        this.answer2 = answer2
        this.answer3 = answer3
        this.answer4 = answer4

        this.correctAnswer = correctAnswer
    }
}

let question1 = new Quiz("Consider the following sequence: 10, 14, 12, 16, 14, 18, 16, 20,... What is the next number is the sequence?", 22, 24, 18, 16, 18) // 18

let question2 = new Quiz("If Cup is to Lip, then Bird is to?", "Beak","Fish", "Sky", "Grass", "Beak") // Beak

let question3 = new Quiz("Which one is the odd one out?", "Trivial", "Important", "Insignificat","Unimportant", "Important") // Important

let question4 = new Quiz("A boy and a doctor were fishing by the Pool. The boy is the doctor's son, but the doctor is not the boy's father. Who is the doctor?", "Mother", "Stranger", "Step-father", "Kidnapper", "Mother")// Mother

let question5 = new Quiz("Consider the following three statements | 1. John is older than Mark. | 2. Selina is older than John. | 3. Mark is older than Selina. First 2 statements are true, then statement 3 is:", "Insufficient Information", "False", "True", "Uncertain", "False") // False

let question6 = new Quiz("Which Shopkeeper takes your belongings and charge money to do so?", "Barber", "House Maid", "Garbage Collector", "Theif", "Barber") // Barber

let question7 = new Quiz("Consider the following statements: A > B, B ≥ C, C < D. Following are 2 conclusions: 1. A > C | 2. A = C | Which statement is correct?", "Conclusion 1 is true", "Both are true", "Conclusion 2 is true", "None is true", "Conclusion 1 is true") // Conclusion 1 is true"

let question8 = new Quiz("What is the essential component to start coding?", "Electricity", "Editor", "Keyboard", "Computer", "Keyboard") // Keyboard

let question9 = new Quiz("If you will take 10 days to code a solution in C++ and 30 days to code it in Rust, how much time will it take to code with Rust API with C++ backend?", "40 days", "20 days", "30 days", "10 days", "40 days") // 40 days

let question10 = new Quiz("In 2021, you are 25 years old and your sister is 20 years old. In which year, will your age be double the age of your sister?", 2036, 1990, 2010, 2006, 2006) // 2006



let arrayOfQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]