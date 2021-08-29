function storage(arr){

    function register(str){
        let [key, value] = str.split(" ");
        if(!storeBook[key]){
            storeBook[key] = 0;
        }
        storeBook[key] += Number(value);
    }

    let storeBook = {};

    arr.forEach(el => register(el));
    Object.entries(storeBook)
            .forEach(el => console.log(`${el[0]} -> ${el[1]}`));
            
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])