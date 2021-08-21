function printDna(num){
    const dashes = {1:0, 2:2, 3:4, 4:2};
    const symbols = {1:["A", "T"], 2:["C", "G"], 3:["T", "T"], 4:["A", "G"], 5:["G", "G"]};
    let dashesCounter = 1;
    let symbolCounter = 1;

    let printRow = (numberDashes, rightSymbol, leftSymbol) => `${"*".repeat((4 - numberDashes) / 2)}${leftSymbol}${"-".repeat(numberDashes)}${rightSymbol}${"*".repeat((4 - numberDashes) / 2)}`;

    // console.log(printRow(dashes[3], symbols[3][1], symbols[3][0]));

    function symbolCount(num){
        if(num == 5){
            return 1;
        }
        return num + 1;
    }

    function dashesCount(num){
        if(num == 4){
            return 1;
        }
        return num + 1;
    }

    for(let i = 0; i < num; i++){
        console.log(printRow(dashes[dashesCounter], symbols[symbolCounter][1], symbols[symbolCounter][0]));
        symbolCounter = symbolCount(symbolCounter);
        dashesCounter = dashesCount(dashesCounter);
    }
}
printDna(10)