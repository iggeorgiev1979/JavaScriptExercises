function solve(someArr){
    
    let str = String(someArr.shift());
    let result ='';
    let indexes = {}
    let index = 0;

    while(str != 'end'){
        let [letter, indexStr] = str.split(':')
        let indexArr = indexStr.split('/').map(Number);
        indexArr.forEach(el => indexes[el] = letter);
        index += indexArr.length;

        str = String(someArr.shift());
    }
    for(let i = 0; i < index; i++){
        result += indexes[i]
    }
    return result
}
console.log(solve(["a:0/2/4/6",
"b:1/3/5",
"end"]));