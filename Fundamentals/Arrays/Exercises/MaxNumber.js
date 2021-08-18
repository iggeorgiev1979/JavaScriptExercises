function solve(arr){
    

    function checkTop(arr, num, index){
        let top = true;
        for (let i = index + 1; i < arr.length; i ++){
            if (num <= arr[i]){
                top = false;
                break
            }
        }
        if (top){
            return num;
        }
    }

    let result = [];
    for (let i = 0; i < arr.length - 1; i++){
        let top = checkTop(arr, arr[i], i);
        if (top){
            result.push(top);
        }
    }
    result.push(arr.pop());
    console.log(...result);
}
solve([41, 41, 34, 20])