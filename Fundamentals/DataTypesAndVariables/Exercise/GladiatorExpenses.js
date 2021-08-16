function solve(fights, helmet, sword, shield, armor){
    let dict = {"helmet":helmet, "sword":sword, "shield":shield, "armor":armor};
    let money = 0;
    let shieldCounter = 0;
    for (let lostFight = 1; lostFight <= fights; lostFight++){
        if (lostFight % 2 == 0){
            money += dict["helmet"];
        }
        if (lostFight % 3 == 0){
            money += dict["sword"];
        }
        if (lostFight % 2 == 0 && lostFight % 3 == 0){
            money += dict["shield"];
            shieldCounter += 1;
        }
        if (shieldCounter == 2){
            money += dict["armor"];
            shieldCounter = 0;
        }
    }
    console.log(`Gladiator expenses: ${money.toFixed(2)} aureus`)
}
solve(23,
    12.50,
    21.50,
    40,
    200)
