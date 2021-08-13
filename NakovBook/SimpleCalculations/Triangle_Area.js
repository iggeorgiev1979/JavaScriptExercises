function calculate([arg1, arg2]){
    let side = parseFloat(arg1);
    let h = parseFloat(arg2);
    let area = side * h / 2;
    console.log("Triangle area = " + area.toFixed(2))
}
calculate([7.75, 8.45])
