function solve(base, increment){
    const dict = {"stone": 0, "marvel": 0, "lapis lazuli": 0, "gold": 0};
    let height = 0;
    while (true){
        height += 1;
        if (base - 2 <= 0){
            dict["gold"] = base**2;
            break
        }
        dict["stone"] += (base - 2)**2;
        if (height % 5 == 0){
            dict["lapis lazuli"] += base**2 - (base - 2)**2;
        }else{
            dict["marvel"] += base**2 - (base - 2)**2;
        }
        base -= 2;
    }
    console.log(`Stone required: ${Math.ceil(dict["stone"] * increment)}\nMarble required: ${Math.ceil(dict["marvel"] * increment)}\nLapis Lazuli required: ${Math.ceil(dict["lapis lazuli"] * increment)}
Gold required: ${Math.ceil(dict["gold"] * increment)}\nFinal pyramid height: ${Math.floor(height * increment)}`);
}
solve(12, 1)
