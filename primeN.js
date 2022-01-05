let input = require('readline-sync');

let userInput = input.question('Enter your number to check: ')
let isPrime = true;
let i = 2;

if(userInput == 1){
    console.log("1 is not a prime nor composite number")
}else if(userInput > 1){

    while(i<userInput){
        if(userInput % i == 0){
            isPrime = false
            break;   
        }
        i++
    }

    if(isPrime){
        console.log("yes prime my buoy")
    }else{
        console.log("not prime my child\nwaht re!")
    }
    
}else{
    console.log("not prime")
}

