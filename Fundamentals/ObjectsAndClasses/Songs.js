function solve(arr){
    class Song{
        constructor(type, name , time){
            this.type = type;
            this.name = name;
            this.time = time;
        }

        print(str){
            if(this.type === str){
                console.log(this.name);
            }else if(str === "all"){
                console.log(this.name);
            }
        }
    }

    let num = Number(arr.shift());
    let compare = arr.pop();

    for(let el of arr){
        let [type, name, time] = el.split("_");
        let song = new Song(type, name, time);
        song.print(compare);
    }
}
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])