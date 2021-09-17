function solve(someNumber = 5){
    let row = "* ".repeat(someNumber);
    for(let index = 0; index < someNumber; index++){
        console.log(row.trim());
    }
}
solve()