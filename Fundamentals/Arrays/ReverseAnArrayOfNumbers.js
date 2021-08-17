function solve(num, arrayOfNumbers){
    num = Number(num);
    let newArray = arrayOfNumbers.slice(0, num).reverse();
    console.log(...newArray)
}
solve(3, [10, 20, 30, 40, 50])