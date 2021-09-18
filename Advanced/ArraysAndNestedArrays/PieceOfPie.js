function solve(someArr, startElement, endElement){
    let arr = [...someArr];
    let startIndex = arr.indexOf(startElement);
    let endIndex = arr.indexOf(endElement);
    return arr.slice(startIndex, endIndex + 1)
}