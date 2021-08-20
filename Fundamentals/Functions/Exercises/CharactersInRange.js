function charactersInRange(firstChr, secondChr){
    let firstChrCode = Math.min(firstChr.charCodeAt(0), secondChr.charCodeAt(0));
    let secondChrCode = Math.max(firstChr.charCodeAt(0), secondChr.charCodeAt(0));
    let result = "";
    for (let index = firstChrCode + 1; index < secondChrCode; index++){
        result += String.fromCharCode(index) + " ";
    }
    console.log(result.trim());
}
charactersInRange("a", "d")
