function solve(someArray){
    let str = String(someArray[0]);
    let key = String(someArray[1]);

    while(key.length > 0){
        let firstShake = str.indexOf(key);
        let secondShake = str.lastIndexOf(key);
        if(firstShake != -1 && secondShake != -1 && firstShake != secondShake){
            str = str.slice(0, firstShake) + str.slice(firstShake + key.length, secondShake) + str.slice(secondShake + key.length,);
            console.log('Shaked it.');
            key = key.slice(0, key.length / 2) + key.slice(key.length / 2 + 1,);
        }else{
            console.log('No shake.');
            return str;
        }
    }
    return `No shake.\n${str}`
}
console.log(solve(["##mtm!!mm.mm*mtm.#",
"mtm"]));