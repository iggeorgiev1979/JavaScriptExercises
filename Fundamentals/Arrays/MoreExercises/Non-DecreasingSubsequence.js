// function solve(arrayOfNumbers) {
//     let result = [arrayOfNumbers.shift()];
//     for (let el of arrayOfNumbers){
//         if(el >= result[result.length - 1]){
//             result.push(el);
//         }
//     }
//     console.log(...result);
// }
// solve([-1,0, 2,3])

function solve(arrayOfNumbers) {

    var compare = arrayOfNumbers[0];


    function myFunction(element){
        if (element >= compare){
            compare = element;
        }
        return element >= compare;
    }

    
    let result = arrayOfNumbers.filter(myFunction);
    console.log(...result);
}