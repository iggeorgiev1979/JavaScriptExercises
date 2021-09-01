function solve(someArray){
    let arr = [...someArray];
    let [firstString, secondString, thirdString] = [...arr];
    let txt = `${firstString}${secondString}`.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let letters = thirdString.split('');
    let lettersIdex = 0
    for(let index = 0; index < txt.length; index++){
        let el = txt[index];
        if(vowels.includes(el.toLowerCase())){
            txt[index] = letters[lettersIdex].toUpperCase();
            lettersIdex++;
            if(lettersIdex == letters.length){
                lettersIdex = 0;
            }
        }
    }
    return `Your generated password is ${txt.reverse().join('')}`
}
console.log(solve([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]));