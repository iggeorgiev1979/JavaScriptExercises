function solve(char){
    char = String(char);
    let check = char.toLowerCase();
    if (char === check){
        console.log("lower-case");
    }else{
        console.log("upper-case");
    }
}
solve("L")