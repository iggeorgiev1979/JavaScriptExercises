function firsAndLast(arr){
    let num = arr.shift();
    let firstNumbers = arr.slice(0, num);
    let lastNumbers = arr.slice(arr.length - num,);
    return `${firstNumbers.join(" ")}\n${lastNumbers.join(" ")}` 
}