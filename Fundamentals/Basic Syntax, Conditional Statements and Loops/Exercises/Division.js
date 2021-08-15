function solve(num){
    let result = NaN;
    if (num % 2 == 0){
        result = 2;
    }
    if (num % 3 == 0){
        result = 3;
    }
    if (num % 6 == 0){
        result = 6
    }
    if (num % 7 == 0){
        result = 7;
    }
    if (num % 10 == 0){
        result = 10
    }
    print_result = (result) ? `The number is divisible by ${result}`:"Not divisible";
    console.log(print_result);
}
solve(31)
