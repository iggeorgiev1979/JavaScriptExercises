function solve(someString){
    let str = String(someString);
    let firstHalf = str.slice(0,str.length / 2);
    let secondHalf = str.slice(str.length / 2, );

    return `${firstHalf.split('').reverse().join('')}\n${secondHalf.split('').reverse().join('')}`
}
console.log(solve('tluciffiDsIsihTgnizamAoSsIsihT'));