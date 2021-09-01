function solve(someArray){

    function dashes(num){
        let emptyWord = ''; 
        for(let el = num; el < txt.length; el++){
            if(txt[el] == '_'){
                emptyWord += txt[el];
            }else{
                break;
            }
        }
        return emptyWord.length;
    }

    let [someText, someWords] = [...someArray];
    let txt = String(someText);
    let words = [...someWords];

    let wordsLength = {};
    words.forEach(word => wordsLength[word.length] = word);

    for(let index = 0; index < txt.length; index++){
        if(txt[index] == '_'){
            let len = dashes(index);
            txt = txt.replace('_'.repeat(len), wordsLength[len])
        }
    }
    return txt

}
console.log(solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]));