function solve(arg){
    let n = arg.length;
    let money = 0;
    let bitcoins = 0;
    let day = 0;
    for (i = 0; i < n; i++){
        if ((i + 1) % 3 == 0){
            let gold = arg[i];
            gold -= gold * 0.3;
            money += gold * 67.51;
        }else{
            money += arg[i] * 67.51;
        }
        if (Math.floor(money / 11949.16) > 0){
            bitcoins += Math.floor(money / 11949.16);
            money -= Math.floor(money / 11949.16) * 11949.16;
            if (day == 0){
                day = i + 1;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (day != 0){
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}
solve([3124.15, 504.212, 2511.124])
