function calculate([arg1, arg2, arg3]){
    let bitcoins = parseInt(arg1);
    let uans = parseFloat(arg2);
    let commission = parseFloat(arg3);
    let levs = bitcoins * 1168;
    let usd = uans * 0.15;
    levs += usd * 1.76;
    let euro = levs / 1.95;
    euro -= euro * commission / 100;
    console.log(euro.toFixed(2));
}
calculate([20, 5678, 2.4])