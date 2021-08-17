function solve(arr){


    function sumElements(arr){
        let result = [];
        for (let i = 0; i < arr.length - 1; i++){
            result.push(arr[i] + arr[i + 1]);
        }
        return result;
    }


    while (arr.length > 1){
        arr = sumElements(arr);
    }
    console.log(arr[0]);
}
solve([5,0,4,1,2])