function neighbor(matrix){

    function checkLeft(x, y){
        if(y < matrix[x].length - 1){
            if(matrix[x][y] === matrix[x][y + 1]){
                return 1;
            }
        }
        return 0;
    }

    function checkDown(x,y){
        if(x < matrix.length -1 && matrix[x][y] === matrix[x + 1][y]){
            return 1;
        }
        return 0;
    }

    let counter = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            counter += checkLeft(i, j);
            counter += checkDown(i, j);
        }
    }
    return counter;
}
console.log(neighbor([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]))