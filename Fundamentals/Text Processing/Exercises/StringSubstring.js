function solve(someString, someText){
    let str = String(someString);
    let txt = String(someText).split(' ');
    for(let word of txt){
        if(word.toLowerCase() === str.toLowerCase()){
            return str;
        }
    }
    return `${str} not found!`

}
console.log(solve('python',
'JavaScript is the best programming language'));