function solve(someString){
    let str = String(someString);
    let result = [];
    for(let letter of str){
        if(letter != result[result.length -1]){
            result.push(letter);
        }
    }
    return result.join('')
}
console.log(solve('aaaaabbbbbcdddeeeedssaa'));