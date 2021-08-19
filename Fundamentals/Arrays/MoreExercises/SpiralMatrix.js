function solve(rows, columns) {

    function fillRight(position) {
        
        for (let index = position[1]; index < columns; index++){
            value += 1;
            if (matrix[position[0]][index] == 0){
                matrix[position[0]][index] = value;
                position[1] = index;
            }else{
                position[1] = index - 1;
                value -= 1;
                break
            }
        }
    }

    function fillDown(position){
        for (let index = position[0] + 1; index < rows; index++){
            value += 1;
            if (matrix[index][position[1]] == 0){
                matrix[index][position[1]] = value;
                position[0] = index;
            }else{
                position[0] = index - 1;
                value -= 1;
                break
            }
        }
    }

    function fillLeft(position) {
        for (let index = position[1] - 1; index >= 0; index--){
            value += 1;
            if (matrix[position[0]][index] == 0){
                matrix[position[0]][index] = value;
                position[1] = index;
            }else{
                position[1] = index + 1;
                value -= 1;
                break
            }
        }
    }

    function fillUp(position) {
        for (let index = position[0] - 1; index >= 0; index--){
            value += 1;
            if (matrix[index][position[1]] == 0){
                matrix[index][position[1]] = value;
                position[0] = index;
            }else{
                position[0] = index + 1;
                value -= 1;
                break
            }
        }
    }


    function generateMatrix(a, b){
        let emptyMatrix = [];
        for (let i = 0; i < a; i++){
            let tmp = [];
            for (let j = 0; j < b; j++){
                tmp.push(0);
            }
            emptyMatrix.push(tmp);
        }
        return emptyMatrix;
    }


    function printMatrix(finalMatrix){
        for (let index = 0; index < rows; index++){
            console.log(...finalMatrix[index]);
        }
    }
    let matrix = generateMatrix(rows, columns);

    let value = 0;
    let currentPosition = [0, 0];
    while (value < rows * columns) {
        
        fillRight(currentPosition);
        fillDown(currentPosition);
        fillLeft(currentPosition);
        fillUp(currentPosition);
        currentPosition[1] += 1;
    }
    printMatrix(matrix);
}
solve(5, 7)