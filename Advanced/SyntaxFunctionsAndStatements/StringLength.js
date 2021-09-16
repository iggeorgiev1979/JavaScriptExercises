function solve(firstString, secondString, thirdString){
    let totalLength = firstString.length + secondString.length + thirdString.length;
    let averageLength = Math.round(totalLength / 3);
    console.log(totalLength);
    console.log(averageLength);
}
solve('chocolate', 'ice cream', 'cake')