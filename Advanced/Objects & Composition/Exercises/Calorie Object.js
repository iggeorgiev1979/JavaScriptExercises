function solve(arr = []){
    let result = {};
    for(let index = 0; index < arr.length; index += 2){
        let key = arr[index];
        let value = Number(arr[index + 1])
        result[key] = value;
    }
    return result;
}
console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));