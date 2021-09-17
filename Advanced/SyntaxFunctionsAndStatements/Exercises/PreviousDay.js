function solve(year, month, day){
    let dd = new Date(year, month - 1, day -1);
    return `${dd.getFullYear()}-${dd.getMonth() + 1}-${dd.getDate()}`;
}
console.log(solve(2016, 9, 30));