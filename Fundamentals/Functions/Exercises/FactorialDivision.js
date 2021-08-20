function factorial(firstNumber, secondNumber){

    function calculateFactorial(number){
        if (number == 1){
            return number;
        }else{
            return number * calculateFactorial(number -1);
        }
    }
    let factorialFirstNumber = calculateFactorial(firstNumber);
    let factorialSecondNumber = calculateFactorial(secondNumber);
    return (factorialFirstNumber / factorialSecondNumber).toFixed(2);
}
console.log(factorial(5, 2))
