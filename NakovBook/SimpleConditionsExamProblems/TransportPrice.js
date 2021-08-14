function solve([arg1, arg2]){
    function taxi(arg1, arg2){
        if (arg2 == "day"){
            var price = 0.79;
        }else{
            var price = 0.9;
        }
        let trip_cost = 0.7 + arg1 * price;
        return trip_cost;
    }
    function bus(arg){
        let trip_cost = arg * 0.09;
        return trip_cost;
    }
    function train(arg){
        let trip_cost = arg * 0.06;
        return trip_cost;
    }
    let km = parseInt(arg1);
    let day_night = arg2;
    if (km >= 20 && km < 100){
        var result = bus(km);
    }else if (km >= 100){
        var result = train(km);
    }else{
        var result = taxi(km, day_night);
    }
    console.log(result);
}
solve([25, "day"])