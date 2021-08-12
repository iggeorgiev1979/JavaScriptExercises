function clac([arg1, currencyInput, currencyOutput]){
    let money = parseFloat(arg1);
    if (currencyInput == "USD"){
        money *= 1.79549
    }else if (currencyInput == "EUR"){
        money *= 1.95583
    }else if (currencyInput == "GBP"){
        money *= 2.53405
    }

    if (currencyOutput == "USD"){
        money /= 1.79549
    }else if (currencyOutput == "EUR"){
        money /= 1.95583
    }else if (currencyOutput == "GBP"){
        money /= 2.53405
    }
    console.log(`${money.toFixed(2)} ${currencyOutput}`);
}
clac([100, "EUR", "BGN"])
