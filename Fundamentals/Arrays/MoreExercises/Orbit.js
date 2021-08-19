function solve(arg){

    function generateMatrix(rows, columns){
        let newMatrix = [];
        for (index = 0; index < rows; index++){
            newMatrix.push(Array(columns).fill(0));
        }
        newMatrix[currentPosition[0]][currentPosition[1]] = 1
        return newMatrix;
    }

    function printMatrix(finalMatrix){
        for (let index = 0; index < finalMatrix.length; index++){
            console.log(...finalMatrix[index]);
        }
    }

    function fillLeft(){
        let num = 2;
        let x = currentPosition[0];
        let y = currentPosition[1];
        let length = matrix.length; 
        if (y >= 1){
            for(let index = y -1; index >= 0; index--){
                matrix[x][index] = num;
                for(let i = x - 1; i > x - num; i--){
                    if(i >= 0 && matrix[i][index] == 0){
                        matrix[i][index] = num;
                    }else{
                        break
                    }
                }
                for(let i = x + 1; i < x + num; i++){
                    if(i < length && matrix[i][index] == 0){
                        matrix[i][index] = num;
                    }else{
                        break
                    }
                }
                num += 1;
            }
        }
    }

    function fillDown(){
        let num = 2;
        let x = currentPosition[0];
        let y = currentPosition[1];
        let length = matrix.length;
        let rowLength = matrix[0].length;
        if(x < length - 1){
            for(let index = x + 1; index < length; index++){
                matrix[index][y] = num;
                for(i = y + 1; i < y + num; i++){
                    if(i < rowLength && matrix[index][i] == 0){
                        matrix[index][i] = num;
                    }else{
                        break
                    } 
                }
                for(i = y - 1; i > y - num; i--){
                    if(i >= 0 && matrix[index][i] == 0){
                        matrix[index][i] = num;
                    }else{
                        break
                    } 
                }
                num += 1;
            }
        }
    }

    function fillRight(){
        let num = 2;
        let length = matrix[0].length;
        let x = currentPosition[0];
        let y = currentPosition[1];
        let columnLength = matrix.length;
        if (y < length - 1){
            for (let index = y + 1; index < length; index++){
                matrix[x][index] = num;
                for(let i = x - 1; i > x - num; i--){
                    if(i >= 0 && matrix[i][index] == 0){
                        matrix[i][index] = num;
                    }else{
                        break
                    }
                }
                for(let i = x + 1; i < x + num; i++){
                    if(i < columnLength){
                        if(matrix[i][index] == 0){
                            matrix[i][index] = num;
                        }else{
                            break
                        }
                    }else{
                        break
                    }
                }
                num += 1;
            }
        }
    }

    function fillUp(){
        let num = 2;
        let x = currentPosition[0];
        let y = currentPosition[1];
        let length = matrix[0].length;
        if (x > 0){
            for (index = x -1; index >= 0; index--){
                matrix[index][y] = num;
                for(i = y + 1; i < y + num; i++){
                    if(i < length && matrix[index][i] == 0){
                        matrix[index][i] = num;
                    }else{
                        break
                    } 
                }
                for(i = y - 1; i > y - num; i--){
                    if(i >= 0 && matrix[index][i] == 0){
                        matrix[index][i] = num;
                    }else{
                        break
                    } 
                }
                num += 1;
            }
        }
    }

    let rows = arg[0];
    let columns = arg[1];
    let currentPosition = [arg[2], arg[3]];
    let matrix = generateMatrix(rows, columns);
    fillRight();
    fillLeft();
    fillDown();
    fillUp();
    printMatrix(matrix);
}
solve([4, 4, 0, 0])