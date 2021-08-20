function generateMatrix(num){

    function printMatrix(matrix){
        for(let index = 0; index < matrix.length; index++){
            console.log(...matrix[index]);
        }
    }

    let newMatrix = Array(num).fill(Array(num).fill(num));
    printMatrix(newMatrix);
}
generateMatrix(3)