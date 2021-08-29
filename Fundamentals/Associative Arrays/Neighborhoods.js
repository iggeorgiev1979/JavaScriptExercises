function neighborhoods(arr){

    function register(str){
        let tmp = str.split(", ");
        tmp.forEach(el => bookLog[el] = []);
    }

    function add(str){
        let [hood, name] = str.split(" - ");
        if(bookLog[hood]){
            bookLog[hood].push(name);
        }
    }

    let bookLog = {};
    register(arr.shift());
    arr.forEach(el => add(el));
    let keys = Object.keys(bookLog)
                    .sort((a, b) => bookLog[b].length - bookLog[a].length);
    
    for(let el of keys){
        console.log(`${el}: ${bookLog[el].length}`);
        bookLog[el].forEach(a => console.log(`--${a}`));
    }

}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy'])