function factorial(firstNumber, secondNumber){

    function calculateFactorial(number){
        let result = 1;
        for(let i = 1; i <=number; i++){
            result *= i;
        }
        return result;
    }
    let factorialFirstNumber = calculateFactorial(firstNumber);
    let factorialSecondNumber = calculateFactorial(secondNumber);
    return (factorialFirstNumber / factorialSecondNumber).toFixed(2);
}
