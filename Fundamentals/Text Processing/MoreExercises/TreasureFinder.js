function solve(someArray){

    function decrypt(someString){
        let code = String(someString);
        let message = '';
        for(let index = 0; index < code.length; index++){
            let charCode = code[index].charCodeAt();
            charCode -= key[index % keyLen];
            message += String.fromCharCode(charCode);
        }

        let type = message.split('&')[1];
        let tmp = message.split('<')[1];
        let coordinates = tmp.split('>')[0];
        return `Found ${type} at ${coordinates}`
    }

    let key = [...someArray.shift().split(' ').map(Number)];
    let arr = [...someArray];
    let result = [];

    let keyLen = key.length;

    let str = String(arr.shift());

    while(str != 'find'){
        result.push(decrypt(str));
        str = String(arr.shift());
    }
    
    return result.join('\n');
}
console.log(solve(["1 2 1 3",
"ikegfp'jpne)bv=41P83X@",
"ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
"find"]));