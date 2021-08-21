function negativeOrPositive(arr){
    let result = [];
    for(let element of arr){
        if(element < 0){
            result.unshift(element);
        }else{
            result.push(element);
        }
    }
    return result.join("\n")
}