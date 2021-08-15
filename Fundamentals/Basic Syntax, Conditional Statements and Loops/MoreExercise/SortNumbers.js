function solve(num1, num2, num3){
    let list = [num1, num2, num3];
    list.sort().reverse();
    console.log(`${list[0]}\n${list[1]}\n${list[2]}`);
}
solve(2, 1, 3)