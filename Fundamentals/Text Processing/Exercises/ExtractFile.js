function solve(someString){
    let str = String(someString);
    let arr = str.split('\\');
    let file = arr[arr.length -1]
    arr = file.split('.');
    let extension = arr.pop();
    let fileName = arr.join('.');
    return `File name: ${fileName}\nFile extension: ${extension}`
}
console.log(solve('C:\\Internal\\training-internal\\Template.pptx'));