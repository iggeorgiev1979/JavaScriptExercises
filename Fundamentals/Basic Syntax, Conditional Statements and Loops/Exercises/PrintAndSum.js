function solve(arg1, arg2){
    var numbers = [];
    let n = arg2 - arg1 + 1;
    let result = (2 * arg1 + (n - 1)) * n / 2;
    for (let i = arg1; i <= arg2; i++){
        numbers.push(i);
    }
    console.log(...numbers)
    console.log("Sum: " + result);
}
solve(50, 60)
