function notations(arr){

    function multiply(firstNum, secondNum, opr){
        return firstNum * secondNum;
    }

    function divide(firstNum, secondNum, opr){
        return firstNum / secondNum;
    }

    function add(firstNum, secondNum, opr){
        return firstNum + secondNum;
    }

    function extract(firstNum, secondNum, opr){
        return firstNum - secondNum;
    }
    let numbers = [...arr];
    let firstNumber;
    let secondNumber;
    let operator;
    let tmp;
    while(true){
        firstNumber = undefined;
        secondNumber = undefined;
        operator = undefined;
        
        for(let index = 0; index < numbers.length; index++){
            if(isNaN(numbers[index])){
                operator = numbers[index];
                firstNumber = numbers[index - 2];
                secondNumber = numbers[index - 1];
                tmp = index;
                break
            }
        }
        if(operator == undefined){
            return "Error: too many operands!";
        }
        if(firstNumber == undefined || secondNumber == undefined){
            return "Error: not enough operands!";
        }
        

        switch(operator){
            case "*":
                numbers.splice(tmp - 2, 3, multiply(firstNumber, secondNumber, operator));
            break;
            case "/":
                numbers.splice(tmp - 2, 3, divide(firstNumber, secondNumber, operator));
            break;
            case "+":
                numbers.splice(tmp - 2, 3, add(firstNumber, secondNumber, operator));
            break;
            case "-":
                numbers.splice(tmp - 2, 3, extract(firstNumber, secondNumber, operator));
            break;
        }
        if(numbers.length == 1){
            return numbers[0];
        }
    }
}
console.log(notations([7,33,8,'-']));
