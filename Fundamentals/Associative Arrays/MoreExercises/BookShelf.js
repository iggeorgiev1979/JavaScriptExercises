function books(arr){

    function register(someString){
        let str = String(someString);
        if(str.includes('->')){
            let [shelfId, genre] = str.split(' -> ');
            if(!shelf.hasOwnProperty(shelfId)){
                shelf[shelfId] ={};
                shelfGenres[shelfId] = genre;
            }

        }else if(str.includes(': ')){
            let bookInfo = str.split(': ');
            let bookTitle = bookInfo.shift();
            let [bookAuthor, bookGenre] = bookInfo[0].split(', ');

            for(let [id, genre] of Object.entries(shelfGenres)){
                if(genre == bookGenre){
                    shelf[id][bookTitle] = bookAuthor;
                    break;
                }
            }
            
        }
    }
    
    let shelf ={};
    let shelfGenres = {};
    arr.forEach(element => register(element));
    Object.keys(shelf)
    .sort((a, b) => Object.keys(shelf[b]).length - Object.keys(shelf[a]).length)
    .forEach(el => {
        console.log(`${el} ${shelfGenres[el]}: ${Object.keys(shelf[el]).length}`);
        Object.keys(shelf[el])
        .sort((a, b) => a.localeCompare(b))
        .forEach(element => console.log(`--> ${element}: ${shelf[el][element]}`))
    })
   
}
books(['1 -> history',
'1 -> action',
'Death in Time: Criss Bell, mystery',
'2 -> mystery', '3 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Hurting Secrets: Dustin Bolt, action',
'Future of Dawn: Aiden Rose, sci-fi',
'Lions and Rats: Gabe Roads, history',
'2 -> romance',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi',
'Pilots of Stone: Brook Jay, history'])