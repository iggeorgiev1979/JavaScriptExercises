function movie(arr){

    let movieCatalogue = [];

    for(let element of arr){
        if(element.split("addMovie ").length == 2){
            let [empty, movieName] = element.split("addMovie ");
            movieCatalogue.push({"name":movieName}); 
        }else if(element.split(" directedBy ").length == 2){
            let[movieName, directorName] = element.split(" directedBy ");
            for(let el of movieCatalogue){
                if(el.name == movieName){
                    el["director"] = directorName;
                }
            }
        }else if(element.split(" onDate ").length == 2){
            let[movieName, movieDate] = element.split(" onDate ");
            for(let el of movieCatalogue){
                if(el.name == movieName){
                    el["date"] = movieDate;
                }
            }
        }
    }

    for(let el of movieCatalogue){
        if(el.name && el.date && el.director){
            console.log(JSON.stringify(el));
        }
    }

}
movie([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])