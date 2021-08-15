function solve(arg1, arg2){
    if (arg2 > 15){
        arg2 = 15;
    }
    let result = String(arg1.toFixed(arg2));
    console.log(parseFloat(result));
}
solve(3.1415926535897932384626433832795, 2)
