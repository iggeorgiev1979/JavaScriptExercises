function solve(someArray){

    let [txt, command] = [...someArray];
    let result = 0;

    for(let letter of txt){
        let code = letter.charCodeAt();
        if(command == 'LOWERCASE'){
            if(code >= 97 && code <= 122){
                result += letter.charCodeAt();
            }

        }else{
            if(code >= 65 && code <= 90){
                result += letter.charCodeAt();
            }
        }
    }
    return `The total sum is: ${result}`
}
console.log(solve(["HelloFromMyAwesomePROGRAM","LOWERCASE"]))