function odd(str){

    function register(arr){

        arr.forEach(element => {
            if(!wordsLog[element]){
                wordsLog[element] = 0;
            }
            wordsLog[element] += 1;
        });
    }

    let wordsLog = {};

    let words = str.split(" ")
    .map(el => el.toLowerCase());
    
    register(words);

    let key = Object.keys(wordsLog)
    .filter(el => wordsLog[el] % 2 != 0)
    .sort((a, b) => wordsLog[b] - wordsLog[a]);
    
    console.log(...key);

}
odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')