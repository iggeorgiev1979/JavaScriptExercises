function solve(matrix){

    function transformMatrix(matrix){
        let newMatrix = [];
        for (let index = 0; index < matrix.length; index++){
            let tmp = matrix[index].split(" ");
            newMatrix.push(tmp);
        }
        return newMatrix;
    }

    function sumFirstDiagonal(matrix){
        let sum = 0;
        let counter = 0;
        for (let index = 0; index < matrix.length; index++){
            sum += Number(matrix[index][counter]);
            counter += 1;
        }
        return sum;
    }

    function sumSecondDiagonal(matrix){
        let sum = 0;
        let counter = matrix[0].length - 1;
        for (let index = 0; index < matrix.length; index++){
            sum += Number(matrix[index][counter]);
            counter -= 1;
        }
        return sum;
    }

    function changeValues(matrix){
        let number = firstDiagonal;
        let firstCounter = 0;
        let secondCounter = matrix[0].length - 1;
        for (let row = 0; row < matrix.length; row++){
            for (let column = 0; column < matrix[0].length; column++){
                if (column != firstCounter && column != secondCounter){
                    matrix[row][column] = number;
                }
            }
            firstCounter += 1;
            secondCounter -= 1;
        }
        return matrix; 
    }

    function printMatrix(matrix){
        for (let index = 0; index < matrix.length; index++){
            console.log(...matrix[index]);
        }
    }
    matrix = transformMatrix(matrix);
    let firstDiagonal = sumFirstDiagonal(matrix);
    let secondDiagonal = sumSecondDiagonal(matrix);
    if (firstDiagonal == secondDiagonal){
        matrix = changeValues(matrix);
    }
    printMatrix(matrix);
}
solve(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1'])