function solve(arrayOfStrings){
    let result = [];
    let step = arrayOfStrings.pop();
    for (let element = 0; element < arrayOfStrings.length; element += Number(step)){
        result.push(arrayOfStrings[element]);
    }
    console.log(...result);
}
solve(['5', '20', '31', '4', '20', '2'])