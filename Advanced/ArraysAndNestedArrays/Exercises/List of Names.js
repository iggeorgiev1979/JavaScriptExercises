function solve(arr){
    arr.sort(function(a, b){
        return a.localeCompare(b);
    });
    for(index in arr){
        console.log(`${Number(index) + 1}.${arr[index]}`);
    }

}
solve(["John", "Bob", "Christina", "Ema"]);