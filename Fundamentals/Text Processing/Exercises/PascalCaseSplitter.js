function solve(someString){

    function smallLetters(num){
        let result = ''
        for(let index = num; index < str.length; index++){
            let letter = str[index];
            if(letter == letter.toLowerCase()){
                result += letter;
            }else{
                break;
            }
        }
        return result;
    }

    let str = String(someString);
    let finalResult = [];
    for(let index = 0; index < str.length; index++){
        let letter = str[index];
        if(letter == letter.toUpperCase()){
            finalResult.push(`${letter}${smallLetters(index + 1)}`)
        }
    }
    return finalResult.join(', ')

}
console.log(solve('SplitMeIfYouCanHaHaYouCantOrYouCan'));