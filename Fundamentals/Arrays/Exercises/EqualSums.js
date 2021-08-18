function solve(arr){
    let indexExists = false;
    for (let index = 0; index < arr.length; index++){
        let sumLeft = arr.slice(0, index).reduce(function(a, b){return a + b}, 0);
        let sumRight = arr.slice(index + 1,).reduce(function(a, b){return a + b}, 0);
        if (sumLeft == sumRight){
            indexExists = true;
            console.log(index);
            break
        }
    }
    if (!indexExists){
        console.log("no");
    }
}
solve([1, 2, 3])