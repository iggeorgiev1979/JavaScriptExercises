function calculate([arg1, arg2, arg3, arg4]){
    let price_veg = parseFloat(arg1);
    let price_fruit = parseFloat(arg2);
    let amount_of_veg = parseInt(arg3);
    let amount_of_fruit = parseInt(arg4);
    let money_veg = price_veg * amount_of_veg;
    let money_fruits = price_fruit * amount_of_fruit;
    let total_money = money_fruits + money_veg;
    total_money /= 1.94;
    console.log(total_money); 
}
calculate([0.194, 19.4, 10, 10])