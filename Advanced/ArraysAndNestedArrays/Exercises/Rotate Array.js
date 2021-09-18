function solve(someArray, num){
    let arr = [...someArray];
    let index = arr.length - (num % arr.length);

    let newArr = arr.splice(0, index);
    return `${arr.join(" ")} ${newArr.join(" ")}`
}
console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15));