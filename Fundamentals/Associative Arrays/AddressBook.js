function book(arr){

    function register(str){
        let [key, value] = str.split(":");
        phoneBook[key] = value;
    }

    let phoneBook = {};

    arr.forEach(el => register(el));

    Object.keys(phoneBook)
            .sort((a, b) => a.localeCompare(b))
            .forEach(el => console.log(`${el} -> ${phoneBook[el]}`));

}
book(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)