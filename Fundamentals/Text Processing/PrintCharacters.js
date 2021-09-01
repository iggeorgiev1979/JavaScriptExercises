function solve(someStr){
    let str = String(someStr);
    return str.split("").join("\n")
}
console.log(solve("AWord"));