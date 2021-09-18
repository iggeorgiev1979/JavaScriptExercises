function solve(someArray){
    let arr = [...someArray];
    let result = [];
    for(let el of arr){
        if(el >= 0){
            result.push(el);
        }else{
            result.splice(0, 0, el)
        }
    }
    return result.join("\n")

}
console.log(solve([7, -2, 8, 9]));