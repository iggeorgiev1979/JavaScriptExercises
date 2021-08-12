function calculate([arg1]){
    let tC = parseFloat(arg1);
    let tF = tC * 1.8 + 32
    console.log(tF.toFixed(2))
}
calculate([25])
