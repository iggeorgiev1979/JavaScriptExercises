function solve(arrayOfStrings) {
    let rotations = Number(arrayOfStrings.pop());
    for (let turn = 0; turn < rotations; turn++) {
        let element = arrayOfStrings.pop();
        arrayOfStrings.unshift(element);
        
    }
    console.log(...arrayOfStrings);
}
solve(['1', '2', '3', '4', '2'])