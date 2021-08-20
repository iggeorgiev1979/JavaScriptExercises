function palindromeIntegers(numbersArray){
    

    function checkPalindrome(number){
        let numberArr = String(number).split("");
        let reversedArr = String(number).split("").reverse();
        if (numberArr.toString() == reversedArr.toString()){
            return true;
        }
        return false;
    }
    for (let index = 0; index < numbersArray.length; index++){
        console.log(checkPalindrome(numbersArray[index]));
    }
}
palindromeIntegers([123,323,421,121])