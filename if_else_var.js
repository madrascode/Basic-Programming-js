// level 0 exercises

var input = require('readline-sync');

var userName = input.question('Enter Your Name: ')
var passWord = input.question('Enter Your Password: ', {
    hideEchoBack: true
}) 

console.log("Hello",userName, "Your Password is:", passWord);



// small quiz game
var score = 0
var answer = 'yes'
var questionOne = "Do you know Shri Krishna ❤💖"
var questionTwo = "Can You say Hare Krishna?"

function quizify(question , answer){
    var askUser = input.question(question)
    if(askUser === answer){
        score += 1;
        console.log('You are right my friend, Hare Krishna!!!')
    }else{
        score -= 1;
        console.log("Oh that's not right my dear friend dont worry try again")
    }
    console.log('your score:', score)
}

quizify(questionOne, answer)
quizify(questionTwo, answer)

