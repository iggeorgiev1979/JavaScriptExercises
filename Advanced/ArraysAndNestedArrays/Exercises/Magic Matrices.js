function solve(matrix) {

    let result = new Set();
    let length = matrix.length;
    for (let i = 0; i < length; i++){
        result.add(matrix[i].reduce(function(a, b){return a + b;},0));
        let sumCol = 0;
        for (let j = 0; j < length; j++){
            sumCol += matrix[j][i];
        }
        result.add(sumCol);
    }
    if (result.size == 1){
        console.log("true");
    }else{
        console.log("false");
    }
}