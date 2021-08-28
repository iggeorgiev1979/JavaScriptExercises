function town(arr){
    class Town{
        constructor(name, latitude, longitude){
            this.name = name;
            this.latitude = latitude;
            this.longitude = longitude;
        }
        print(){
            console.log(`{ town: '${this.name}', latitude: '${this.latitude.toFixed(2)}', longitude: '${this.longitude.toFixed(2)}' }`)
        }
    }
    for(let el of arr){
        let [townName, lat, long] = el.split(" | ");
        let newObj = new Town(townName, Number(lat), Number(long));
        newObj.print();
    }   
}
town(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])