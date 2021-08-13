function solve(arg){
    const numbers = {0: "zero", 1:"one", 2:"two", 3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine"};
    let digit = parseInt(arg);
    if (digit < 10){
        console.log(numbers[arg]);
    }else{
        console.log("number too big");
    } 
}
solve(10)
