function solve(someArray){
    let arr = [...someArray];
    arr.sort(function(a, b){return a - b})
    let index = Math.trunc(arr.length / 2);
    return arr.slice(index,)

}
console.log(solve([3, 19, 14, 7, 2, 19, 6]));