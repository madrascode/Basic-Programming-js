// add function
function addNum(num1, num2){
    console.log("Number 1:", num1, "\nNumber 2:", num2)
    var result = num1 + num2
    return result
}

var addResult = addNum(2,5)
console.log("Result:",addResult);

// product function

function prodNum(num1, num2){
    console.log("Number 1:",num1,'\nNumber 2:', num2)
    var result = num1 * num2
    return result
}

var prodResult = prodNum(8, 8)
console.log(prodResult);


function operation(num1, num2, operator){
    let result = num1 + operator + num2
    console.log(result)
}

operation(8,8,'+')