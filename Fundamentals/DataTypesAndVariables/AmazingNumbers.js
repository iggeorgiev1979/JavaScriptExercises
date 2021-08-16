function solve(num){
    let num_list = String(num).split("");
    num_list = num_list.map(Number);
    let sum_list = String(num_list.reduce(function(a,b){return a + b}, 0)).split("");
    let a = sum_list.indexOf("9");
    a == -1 ? num += " Amazing? False": num+= " Amazing? True";
    console.log(num);
}
solve(583472)