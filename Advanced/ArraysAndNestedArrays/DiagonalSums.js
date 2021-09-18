function solve(matrix){
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;
    let lastIndex = matrix.length -1;
    for(let index in matrix){
        sumFirstDiagonal += matrix[index][index];
        sumSecondDiagonal += matrix[index][lastIndex - index];
    }
    return `${sumFirstDiagonal} ${sumSecondDiagonal}`
}
console.log(solve([[20, 40],
    [10, 60]]));