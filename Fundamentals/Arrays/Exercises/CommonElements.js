function solve(firstArray, secondArray){
    for (let i of firstArray){
        if (secondArray.includes(i)){
            console.log(i);
        }
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])