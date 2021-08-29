function word(arr){

    function count(str){
        if(!wordCount[str]){
            wordCount[str] = 0;
        }
        wordCount[str] += 1;
    }

    let wordCount = {};
    arr.forEach(el => count(el));
    Object.keys(wordCount)
            .sort((a, b) => wordCount[b] - wordCount[a])
            .forEach(el => console.log(`${el} -> ${wordCount[el]} times`));
    
}
word(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])