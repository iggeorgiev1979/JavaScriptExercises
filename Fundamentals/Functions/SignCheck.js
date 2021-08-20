function solve(a, b, c){
    let arr = [a,b,c];
    let counter = 0;
    for(let i of arr){
        if(i < 0){
            counter += 1
        }
    }
    let result = (counter % 2 == 0) ? "Positive":"Negative";
    console.log(result);
}
solve(5, -12, -15)