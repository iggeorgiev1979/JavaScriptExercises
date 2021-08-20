function solve(a, b, operator){
    let result;
    if (operator == "multiply") {
        result = a * b;
    }else if (operator == "divide") {
        result = a / b;
    } else if (operator == "add") {
        result = a + b;
    } else if(operator == "subtract"){
        result = a - b;
    }
    console.log(result);
}