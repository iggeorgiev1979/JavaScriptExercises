function calculate([arg]){
    let rad = parseFloat(arg);
    let deg = rad * 180 / Math.PI;
    console.log(Math.round(deg));
}
calculate([3.1416])