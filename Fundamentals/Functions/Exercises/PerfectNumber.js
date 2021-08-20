function perfectNumber(num){
    if(num < 0){
        return "It's not so perfect.";
    }
    let divisors = [1];
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            divisors.push(i);
        }
    }
    let sum = divisors.reduce(function(a, b){return a + b}, 0);
    if(sum == num){
        return "We have a perfect number!";
    }
    return "It's not so perfect.";
}
console.log(perfectNumber(6))