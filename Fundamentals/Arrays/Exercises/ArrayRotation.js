function solve(arr, num){
    arr = Object(arr);
    num = Number(num);
    for (let i = 0; i < num; i++){
        let tmp = arr.shift();
        arr.push(tmp);
    }
    console.log(...arr);
}
solve([51, 47, 32, 61, 21], 2)