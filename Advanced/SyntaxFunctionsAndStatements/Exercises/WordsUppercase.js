function solve(someString){
    let pattern = /\w+/g;
    let str = String(someString);
    let match = str.match(pattern);
    for(let el in match){
        match[el] = match[el].toUpperCase();
    }

    return match.join(", ")

}
console.log(solve('Hi, how are you?'));