function solve(arg){
    if (typeof(arg) == "number"){
        console.log((Math.PI * arg**2).toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(arg)}.`);
    }
}
solve('name')