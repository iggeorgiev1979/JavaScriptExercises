function solve(arr){
    let lengths = [];
    let result = arr[0];
    let resultLength = 1;
    for (let i = 0; i < arr.length; i++){
        lengths.push(1);
    }

    for (let index = 1; index < arr.length; index++){
        if (arr[index] == arr[index - 1]){
            lengths[index] += lengths[index - 1];
            if (lengths[index] > resultLength){
                resultLength = lengths[index];
                result = arr[index];
            }
        }
    }
    let finalResult = String(result) + " ";
    finalResult = finalResult.repeat(resultLength);
    arr = finalResult.split(" ");
    arr.pop();
    console.log(...arr);
}
solve([0, 10, 10, 5, 2, 2, 6, 3, 3])