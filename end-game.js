var input = require('readline-sync');
// global variables
score = 0

var userName = input.question("Enter your Name: ")
console.log('Hi ', userName, "Welcome to lord jagannath's quiz\ntype your answer in smallcase:-}\nlet's get started\n--------------------------------------------")

function quizProcessor(question, answer){

    var userInput = input.question(question)
    if(userInput === answer){
        score += 1
        console.log('Right Answer!')
    }else{
        score -= 1
        console.log('correct answer is',answer)
    }
    console.log('your score is: ', score)
}


var questionArray = [{
    question:"Name of Lord Jagannath's Sister :-)",
    answer: "subhadraji",
},{
    question:"Name of Lord Jagannath's Big and strong Brother",
    answer: "balbhadraji",
},{
    question:"Name of Lord Jagannath's staying place",
    answer: "puri",
}] 


for(var i=0; i<questionArray.length; i++){
    quizProcessor(questionArray[i].question, questionArray[i].answer)
}

console.log('Your Total Score is', score)