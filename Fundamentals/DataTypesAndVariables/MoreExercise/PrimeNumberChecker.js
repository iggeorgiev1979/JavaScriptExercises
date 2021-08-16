function solve(num){
    num = Number(num);
    let isPrime = true;
    for (let i = 2; i < num; i++){
        if (num % i == 0){
            isPrime = false;
            return isPrime;
        }
    }
    return isPrime;
}
console.log(solve(8))