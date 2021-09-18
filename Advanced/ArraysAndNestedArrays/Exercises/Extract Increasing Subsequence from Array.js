function solve(someArray){
    let arr = [...someArray];
    
    let result = [arr.shift()];
    for(let el of arr){
        if(el >= result[result.length - 1]){
            result.push(el)
        }
    }
    return result
}
console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));