function solve(someText, someWord){
    let txt = String(someText);
    let word = String(someWord);
    while(txt.includes(word)){
        txt = txt.replace(word, "*".repeat(word.length));
    }
    return txt
}
console.log(solve("A small sentence with some small", "small"));