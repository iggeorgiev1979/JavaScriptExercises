function solve([arg1, arg2]){
    let my_date = new Date(2021, 08, 13, arg1, arg2);
    my_date.setMinutes(my_date.getMinutes() + 15);
    let hour = my_date.getHours();
    let minutes = my_date.getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`
    }
    console.log(`${hour}:${minutes}`);
}
solve([1, 46])