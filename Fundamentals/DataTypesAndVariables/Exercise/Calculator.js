function solve(number1, operator, number2){
    if (operator == "+"){
        var result = number1 + number2;
    }else if (operator == "-"){
        var result = number1 - number2;
    }else if (operator == "*"){
        var result = number1 * number2;
    }else{
        var result = number1 / number2;
    }
    console.log(result.toFixed(2));
}
solve(5, "+", 10)