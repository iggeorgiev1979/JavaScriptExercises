function solve(num){
    num = Number(num);
    let numList = String(num).split("");
    numList = numList.map(Number);
    let sum = numList.reduce(function(a,b){return a + b;}, 0);
    console.log(sum);
}
solve(245678)