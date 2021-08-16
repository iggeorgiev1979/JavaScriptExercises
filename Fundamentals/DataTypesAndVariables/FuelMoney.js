function solve(distance, passengers, fuel_price){
    let consumption = 7 + (passengers * 100) / 1000;
    let needed_fuel = distance / 100 * consumption;
    let money = needed_fuel * fuel_price;
    console.log(`Needed money for that trip is ${money.toFixed(2)}lv.`);
}
solve(90, 14, 2.88)