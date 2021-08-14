function solve(rest_days){
    let working_days = 365 - rest_days;
    let playing_hours = working_days * 63 + rest_days * 127;
    if (playing_hours <= 30000){
        console.log("Tom sleeps well");
        let dif = 30000 - playing_hours;
        console.log(`${Math.floor(dif / 60)} hours and ${dif % 60} minutes less for play`);
    }else{
        console.log("Tom will run away");
        let dif = playing_hours - 30000;
        console.log(`${Math.floor(dif / 60)} hours and ${dif % 60} minutes more for play`)
    }
}
solve(113)
