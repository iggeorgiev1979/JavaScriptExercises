function decode(arr){
    let num = Number(arr.shift());
    let template = arr.splice(0, num);
    let letter;
    let result = ""
    let x;
    let y;
    for(let index = 0; index < num; index++){
        template[index] = template[index].split(" ").map(Number);
    }
    let matrix = [...arr];
    for(let index = 0; index < matrix.length; index++){
        matrix[index] = matrix[index].split(" ").map(Number);
    }
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(i == num){
                x = 0;
            }else{
                x = i % num;
            }
            if(j == template[0].length){
                y = 0;
            }else{
                y = j % template[0].length;
            }
            letter = matrix[i][j] + template[x][y];
            letter = String.fromCharCode(64 + letter % 27);
            if(letter === "@"){
                letter = " "
            }
            result += letter;
        }
    }
    return result;
}
console.log(decode(["1","1 3 13","12 22 14 13 25 0 4 24 23","18 24 2 25 22 0 0 11 18","8 25 6 26 8 23 13 4 14","14 3 14 10 6 1 6 16 14","11 12 2 10 24 2 13 24 0","24 24 10 14 15 25 18 24 12", "4 24 0 8 4 22 19 22 14", "0 11 18 26 1 19 18 13 15", "8 15 14 26 24 14 26 24 14"]))