function solve(arr){
    result = 0;
    for (let i of arr){
        let num = Number(i);
        if ( num % 2 == 0){
            result += num;
        }
    }
    console.log(result);
}
solve(['1','2','3','4','5','6'])