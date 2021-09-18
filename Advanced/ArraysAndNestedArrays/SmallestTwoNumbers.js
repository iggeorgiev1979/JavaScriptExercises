function solve(someArr){
    let arr = [...someArr];
    let firstNumber = Math.min(...arr);
    let index = arr.indexOf(firstNumber);
    arr.splice(index, 1);
    let secondNumber = Math.min(...arr);
    return `${firstNumber} ${secondNumber}`
}
console.log(solve([3, 0, 10, 4, 7, 3]));