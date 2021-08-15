function solve(num){
    let result = "no";
    if (num % 4 == 0 && num % 10 != 0){
        result = "yes";
    }else if (num % 400 == 0){
        result = "yes";
    }
    console.log(result);
}
solve(4)
