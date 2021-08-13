function claculate([arg1, arg2, arg3]){
    let working_days = parseInt(arg1);
    let money_per_day = parseFloat(arg2);
    let usd_bg = parseFloat(arg3);
    let month_paiment = working_days * money_per_day;
    let year_salary = month_paiment * 12;
    year_salary += month_paiment * 2.5;
    year_salary -= year_salary * 25 / 100;
    year_salary *= usd_bg;
    let money = year_salary / 365;
    console.log(money.toFixed(2));
}
claculate([21, 75, 1.59])
