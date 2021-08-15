function solve(count, type, day){
    const prices = {"Students":[8.45, 9.8, 10.46], "Business":[10.9, 15.6, 16], "Regular":[15, 20, 22.5]};
    const day_time = {"Friday": 0, "Saturday": 1, "Sunday": 2};
    let index = day_time[day];
    let cost = prices[type][index];
    if (type == "Business" && count >= 100){
        count -= 10;
    }
    let total_price = count * cost;
    if (type == "Students" && count >= 30){
        total_price -= total_price * 0.15;
    }else if (type == "Regular" && count >= 10 && count <= 20){
        total_price -= total_price * 0.05;
    }
    console.log("Total price: " + total_price.toFixed(2));
}
solve(30, "Students", "Sunday")
