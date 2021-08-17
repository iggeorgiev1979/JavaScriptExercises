function solve(num){
    let days = {1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday", 7:"Sunday"};
    if (num in days){
        console.log(days[num]);
    }else{
        console.log("Invalid day!");
    }
}
solve(11)