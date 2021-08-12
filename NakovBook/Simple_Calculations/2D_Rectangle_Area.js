function calculate([arg1, arg2, arg3, arg4]){
    let x1 = parseFloat(arg1);
    let y1 = parseFloat(arg2);
    let x2 = parseFloat(arg3);
    let y2 = parseFloat(arg4);
    let sideA = Math.abs(x1 - x2);
    let sideB = Math.abs(y1 - y2);
    console.log(sideA * sideB);
    console.log(2 * (sideA + sideB));
}
calculate([60, 20, 10, 50])
