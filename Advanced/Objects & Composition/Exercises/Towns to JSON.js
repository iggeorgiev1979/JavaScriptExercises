function solve(arr = []){
    let result = [];
    arr.shift();
    for(el of arr){
        let tmpArr = el.split("|");
        tmpArr.shift();
        tmpArr.pop();
        let [Town, Latitude, Longitude] = [...tmpArr]
        Town = Town.trim();
        Latitude = Math.round(Number(Latitude) * 100) / 100;
        Longitude = Math.round(Number(Longitude) * 100) / 100;
        let tmp = {
            Town,
            Latitude,
            Longitude
        }
        result.push(tmp);

    }
    return JSON.stringify(result)    
}
console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']))