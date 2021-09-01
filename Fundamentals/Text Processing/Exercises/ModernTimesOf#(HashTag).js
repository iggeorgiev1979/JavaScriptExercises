function solve(someString){

    function validate(word){
        let wordArray = word.split('');
        for(let letter of word){
            if(letter.toLowerCase() == letter.toUpperCase()){
                return false
            }
        }
        return true
    }
    let txt = String(someString);
    let txtArray = txt.split(' ');
    txtArray.forEach(word =>{
        let wordArray = word.split('');
        if(wordArray[wordArray.length -1] == ','){
            wordArray.pop();
            word = wordArray.join('');
        }
        if(word.startsWith('#') && word.length > 1 && validate(word.slice(1,))){
            console.log(word.slice(1,));
        }
    })
}
solve('Nowadays everyone uses # to tag a #special, word in #socialMedia');