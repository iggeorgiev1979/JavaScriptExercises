function solve(firstArgument, secondArgument){
    let result = 0;
    for(let element = Number(firstArgument); element <= Number(secondArgument); element++){
        result += element
    }
    return result
}

console.log(solve('1', '5'));