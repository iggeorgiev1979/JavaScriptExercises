function sorting(arr){
    arr.sort((a, b) => a - b);
    let result = [];
    let counter = 0;
    while(arr.length > 0){
        if(counter % 2 == 0){
            result.push(arr.pop());

        }else{
            result.push(arr.shift());
        }
        counter++
    }
    console.log(...result);
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 7]);