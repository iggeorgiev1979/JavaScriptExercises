function solve(someText, someString){
    let txt = String(someText);
    let str = String(someString);
    let counter = 0;
    let txtArray = txt.split(' ');
    txtArray.forEach(el =>{
        if(el == str){
            counter += 1;
        }
    })
    return counter;
}
console.log(solve("This is a word and it also is a sentence", "is"));