function solve(arg){
    let number = parseInt(arg);
    const numbers_dict = {0:"zero", 1:"one", 2:"two", 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine", 10:"ten",
    11:"eleven", 12:"twelve", 13:"thirteen", 14:"fourteen", 15:"fifteen", 16:"sixteen", 17:"seventeen", 18:"eighteen", 19:"nineteen",
    20:"twenty", 30:"thirty", 40:"forty", 50:"fifty", 60:"sixty", 70:"seventy", 80:"eighty", 90:"ninety", 100:"one hundred"};
    if (number >= 0 && number <= 100){
        if (number <= 20 || number % 10 == 0){
            console.log(numbers_dict[number]);
        }else{
            let a = number % 10;
            let b = number - a;
            console.log(`${numbers_dict[b]} ${numbers_dict[a]}`);
        }
    }
}
solve(11)