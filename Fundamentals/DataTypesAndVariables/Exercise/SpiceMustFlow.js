function solve(yield){
    yield = Number(yield);
    let days = 0;
    let extractedSpice = 0;
    while (yield >= 100){
        extractedSpice += yield;
        days += 1;
        extractedSpice -= 26;
        yield -= 10;
    }
    if (extractedSpice >= 26){
        extractedSpice -= 26;
    }
    console.log(`${days}\n${extractedSpice}`);
}
solve(200)