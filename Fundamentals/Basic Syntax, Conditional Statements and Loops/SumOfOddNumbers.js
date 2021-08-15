function solve(num){
    let sum = 0;
    let i = 1;
    while (true){
        if (i % 2 != 0){
            console.log(i);
            sum += i;
            num--;
        }
        i++
        if (num == 0){
            break
        }
    }
    console.log("Sum: " + sum);
}
solve(5)
