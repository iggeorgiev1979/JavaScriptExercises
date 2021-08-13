function solve([arg1, arg2, arg3]){
    let digit = parseFloat(arg1);
    const units = {"m":1, "mm":1000, "cm":100, "mi":0.000621371192, "in":39.3700787, "km":0.001, "ft":3.2808399, "yd":1.0936133};
    let meters = digit / units[arg2];
    console.log(meters * units[arg3]);
}
solve([150, "mi", "in"])
