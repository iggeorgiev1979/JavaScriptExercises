function solve(someArray){
    let arr = [...someArray];
    arr.sort(function(a, b){
        if(b.length - a.length == 0){
            return a.localeCompare(b);
        }else
        return a.length - b.length
    });

    return arr.join('\n')
}
console.log(solve(['alpha', 
'beta', 
'gamma']));