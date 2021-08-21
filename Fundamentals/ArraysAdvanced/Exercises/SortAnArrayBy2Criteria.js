function solve(arr){
    return arr.sort(function(a, b){
        if(a.length - b.length == 0){
            return a.localeCompare(b);
        }
        return a.length - b.length;
    })
        .join('\n');
}
console.log(solve(["test", "Deny", "omen", "Default"]))