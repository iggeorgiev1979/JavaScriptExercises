function solve(n, k){
    let result = [1];
    while(result.length < n){
        if(result.length <= k){
            let sum = result.reduce(function(a, b){return a + b}, 0);
            result.push(sum);
        }else{
            let lastElements = result.slice(-k,);
            let sum = lastElements.reduce(function(a, b){return a + b}, 0);
            result.push(sum)
        }
    }
    console.log(result);
}
solve(6, 3)