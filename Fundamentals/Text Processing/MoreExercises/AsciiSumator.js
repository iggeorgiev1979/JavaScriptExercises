function solve(someArray){

    let start = Math.min(someArray[0].charCodeAt(), someArray[1].charCodeAt());
    let end = Math.max(someArray[0].charCodeAt(), someArray[1].charCodeAt());
    let str = String(someArray[2]);

    let result = 0;

    for(let el of str){
        let code = el.charCodeAt();
        if(code > start && code < end){
            result += code;
        }
    }
    return result;

}
console.log(solve(["a",
"1",
"jfe392$#@j24ui9ne#@$"]));