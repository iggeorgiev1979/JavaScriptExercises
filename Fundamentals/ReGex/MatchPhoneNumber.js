function solve(someString){
    let str = String(someString);
    let pattern = /\+359(\s|-)2\1\d{3}\1\d{4}\b/g
    let match = str.match(pattern);
    return match.join(', ')
}
console.log(solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"));