function solve(year, month, day){
    let my_date = new Date(year, month - 1, day);
    my_date.setDate(my_date.getDate() + 1);
    year = my_date.getFullYear();
    month = my_date.getMonth();
    day = my_date.getDate();
    console.log(`${year}-${month + 1}-${day}`);
}
solve(2016, 9, 30)
