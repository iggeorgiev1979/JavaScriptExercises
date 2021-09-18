function solve(matrix){
    let biggestElement = Number.MIN_SAFE_INTEGER;
    for(el of matrix){
        let maxEl = Math.max(...el);
        if(maxEl > biggestElement){
            biggestElement = maxEl;
        }
    }
    return biggestElement
}
console.log(solve([[20, 50, 10],
    [8, 33, 145]]));