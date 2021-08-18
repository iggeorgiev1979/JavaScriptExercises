function solve(arr){
    function sumArray(arr){
        let result = 0;
        for (let i of arr){
            result += i;
        }
        return result;
    }


    let oldSum = sumArray(arr);
    for (let i =0; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            arr[i] +=i;
        }else{
            arr[i] -= i;
        }
    }

    let newSum = sumArray(arr);
    console.log(`[ ${arr.join(", ")} ]\n${oldSum}\n${newSum}`);
}
solve([5, 15, 23, 56, 35])