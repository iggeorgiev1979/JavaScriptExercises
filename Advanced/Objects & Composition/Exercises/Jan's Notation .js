function solve(arr = []){
    let numbers = []
    for(let el of arr){
        if(typeof(el) == 'number'){
            numbers.push(el);
        }else{
            if(numbers.length < 2){
                return "Error: not enough operands!"
            }else{
                let secondOperand = numbers.pop();
                let firstOperand = numbers.pop();
                switch(el){
                    case "+":
                        numbers.push(firstOperand + secondOperand);
                    break
                    case "-":
                        numbers.push(firstOperand - secondOperand);
                    break;
                    case "*":
                        numbers.push(firstOperand * secondOperand);
                    break;
                    case "/":
                        numbers.push(firstOperand / secondOperand);
                }
            }
        }
    }
    if(numbers.length > 1){
        return "Error: too many operands!"
    }
    return numbers.pop()
}
console.log(solve([15,
    '/']))