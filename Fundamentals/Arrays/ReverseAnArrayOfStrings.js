function solve(arr){
    let middle = arr.length / 2;
    for (let i = 0; i < middle; i++){
        let oldValue = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = oldValue;
    }
    console.log(...arr);
}
solve(['a', 'b', 'c', 'd'])