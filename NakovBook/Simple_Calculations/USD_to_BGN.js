function calc([arg]){
    let usd = parseFloat(arg);
    let bgn = usd * 1.79549
    console.log(`${bgn.toFixed(2)} BGN`)
}
calc([20])
