function words(arr){

    function register(str){
        if(!trackLog[str]){
            trackLog[str] = 0;
            arr.forEach(element => {if(element === str){trackLog[str] += 1}})
        }
    }

    let trackLog = {};
    let wordsToSearch = arr.shift().split(" ");

    wordsToSearch.forEach(element => register(element));

    Object.keys(trackLog)
    .sort((a, b) => trackLog[b] - trackLog[a])
    .forEach(element => console.log(`${element} - ${trackLog[element]}`));
}
words([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ])