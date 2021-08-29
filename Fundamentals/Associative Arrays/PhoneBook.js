function book(arr){

    function register(str){
        let [name, number] = str.split(" ");
        phoneBook[name] = number;
    }

    let phoneBook = {};

    arr.forEach(el => register(el));

    for(let element in phoneBook){
        console.log(`${element} -> ${phoneBook[element]}`);
    }
}
book(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])