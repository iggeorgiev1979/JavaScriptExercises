function solve(steps, stepsLength, speed){
    let distance = steps * stepsLength;
    let restMinutes = Math.trunc(distance / 500);
    distance /= 1000;
    let timeToWalk = ((distance / speed) * 60 + restMinutes) * 60;
    let dd = new Date(2021, 9, 1, 0, 0, 0);
    dd.setSeconds(Math.round(timeToWalk))
    let hours = dd.getHours();
    let minutes = dd.getMinutes();
    let seconds = dd.getSeconds();
    if(hours < 10){
        hours = `0${hours}`
    }
    if(minutes < 10){
        minutes = `0${minutes}`
    }
    if(seconds < 10){
        seconds = `0${seconds}`
    }

    return `${hours}:${minutes}:${seconds}`
}
console.log(solve(2564, 0.70, 5.5));