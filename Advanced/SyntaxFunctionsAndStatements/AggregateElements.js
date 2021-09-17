function solve(someArray){
    let arr = [...someArray]
    let sum = arr.reduce(function(x, y) {return x + y}, 0);
    let inverseValuesSum = 0;
    for(el of arr){
        inverseValuesSum += 1 / el;
    }

    let concatenatedNumbers = '';
    arr.forEach(element => {
        concatenatedNumbers += String(element);
    });

    console.log(sum);
    console.log(inverseValuesSum);
    console.log(concatenatedNumbers);
}
solve([1, 2, 3])