function solve(num){
    let numberList = String(num).split('').map(Number);
    let numberSet = new Set(numberList);
    console.log(numberSet.size == 1);
    console.log(numberList.reduce(function(a, b){
        return a + b;
    }, 0));
}
solve(2222222)