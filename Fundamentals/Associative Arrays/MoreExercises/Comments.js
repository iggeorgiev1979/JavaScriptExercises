function comment(arr){

    function register(str){

        if(str.split(" ")[0] == 'user'){
            if(!users.includes(str.split(" ")[1])){
                users.push(str.split(" ")[1]);
            }
        }else if(str.split(" ")[0] == 'article'){
            if(!articles.hasOwnProperty(str.split(" ")[1])){
                articles[str.split(" ")[1]] = {};
            }
        }else{
            let tmp = str.split(": ");
            let userName = tmp[0].split(" ").shift();
            let articleName =  tmp[0].split(" ").pop();
            let title = tmp[1].split(", ")[0];
            let commentContent = tmp[1].split(", ")[1];

            if(users.includes(userName) && articles.hasOwnProperty(articleName)){
                if(!articles[articleName].hasOwnProperty(userName)){
                    articles[articleName][userName] = [];
                }
                articles[articleName][userName].push(`${title} - ${commentContent}`);
            }
        }
    }

    function countComments(obj){
        let result = 0;
        Object.keys(obj)
        .forEach(el =>{
            result += obj[el].length;
        });
        return result;
    }

    let users = [];
    let articles = {};
    arr.forEach(element => {
        register(element)
    });

    Object.keys(articles)
    .sort((a, b) => countComments(articles[b]) - countComments(articles[a]))
    .forEach(el => {
        console.log(`Comments on ${el}`);
        Object.keys(articles[el])
        .sort((a, b) => a.localeCompare(b))
        .forEach(element =>{
            for(let comment of articles[el][element]){
                console.log(`--- From user ${element}: ${comment}`);
            }
        })
    });    

}
comment(['user aUser123',
'someUser posts on someArticle: NoTitle, stupidComment',
'article Books',
'article Movies',
'article Shopping',
'user someUser',
'user uSeR4',
'user lastUser',
'uSeR4 posts on Books: I like books, I do really like them',
'uSeR4 posts on Movies: I also like movies, I really do',
'someUser posts on Shopping: title, I go shopping every day',
'someUser posts on Movies: Like, I also like movies very much'])