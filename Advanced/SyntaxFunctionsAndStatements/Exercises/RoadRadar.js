function solve(speed, area){
    let speedLimits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential":20
    };
    if(speed <= speedLimits[area]){
        return `Driving ${speed} km/h in a ${speedLimits[area]} zone`
    }else{
        let difference = speed - speedLimits[area];
        let status;
        if(difference <= 20){
            status = 'speeding';
        }else if(difference > 20 && difference <= 40){
            status = 'excessive speeding';
        }else{
            status = 'reckless driving'
        }

        return `The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`
    }
}
console.log(solve(21, 'residential'));