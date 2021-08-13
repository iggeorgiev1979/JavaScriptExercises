function solve(arg){
    let number = parseInt(arg);
    if (number <= 100){
        var bonus = 5;
    }else if (number > 100 && number <= 1000){
        var bonus = number * 0.2;
    }else if (number > 1000){
        var bonus = number * 0.1;
    }
    if (number % 2 == 0){
        bonus +=1;
    }
    if (number % 10 == 5){
        bonus += 2;
    }
    console.log(bonus);
    console.log(number + bonus);
}
solve(15875)
