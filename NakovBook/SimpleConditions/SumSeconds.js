function solve([arg1, arg2, arg3]){
    let seconds = parseInt(arg1) + parseInt(arg2) + parseInt(arg3);
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;
    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`)
    }else{
        console.log(`${minutes}:${seconds}`)
    }
}
solve([14, 12, 10])
