function solve(day, age){
    const tickets = {"Weekday":[12, 18, 12], "Weekend":[15, 20, 15], "Holiday":[5, 12, 10]};
    if (age >= 0 && age <= 18){
        var i = 0;
    }else if (age > 18 && age <= 64){
        var i = 1;
    }else if (age > 64 && age <= 122){
        var i = 2;
    }
    let result = (age >=0 && age <= 122) ?`${tickets[day][i]}$`:"Error!";
    console.log(result);
}
solve("Holiday", 123)