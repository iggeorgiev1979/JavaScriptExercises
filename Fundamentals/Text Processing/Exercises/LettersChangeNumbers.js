function solve(someString){

    function calculate(numberStr){
        let tmpStr = String(numberStr);
        let firstLetter = tmpStr[0];
        let lastLetter = tmpStr[tmpStr.length - 1];
        let num = Number(tmpStr.slice(1, tmpStr.length -1));

        let firstLetterPosition = firstLetter.toLowerCase().charCodeAt() - 96;
        let lastLetterPosition = lastLetter.toLowerCase().charCodeAt() - 96;

        if(firstLetter == firstLetter.toUpperCase()){
            num /= firstLetterPosition;
        }else{
            num *= firstLetterPosition;
        }

        if(lastLetter == lastLetter.toUpperCase()){
            num -= lastLetterPosition;
        }else{
            num += lastLetterPosition;
        }
        return num;
    }


    let str = String(someString).split(' ');
    let result = 0;
    for(let el of str){
        if(el){
            result += calculate(el.trim());
        }
    }
    return result.toFixed(2);
}
console.log(solve('P34562Z q2576f   H456z'));