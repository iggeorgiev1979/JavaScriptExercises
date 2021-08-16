function solve(num){
    function check_number(num){
        let num_list = String(num).split("");
        num_list = num_list.map(Number);
        let sum = num_list.reduce(function(a, b){return a + b;}, 0);
        if (sum == 5 || sum == 7 || sum == 11){
            return "True";
        }
        return "False";
    }
    for (let i = 1; i <= num; i++){
        console.log(`${i} -> ${check_number(i)}`);
    }
}
solve(15)