function solve(arg){


    function heal(arg){
        if (health + arg > 100){
            arg = 100 - health;
        }
        health += arg;
        console.log(`You healed for ${arg} hp.\nCurrent health: ${health} hp.`);
    }


    function fight(monsterType, damageTaken, num){
        health -= damageTaken;
        if (health > 0){
            console.log(`You slayed ${monsterType}.`);
        }else{
            console.log(`You died! Killed by ${monsterType}.\nBest room: ${num + 1}`);
            return true;
        }
        return false;   
    }


    let death = false;
    let rooms = arg[0].split("|");
    let coins = 0;
    let health = 100;
    for (let index = 0; index < rooms.length; index++){
        let tmp = rooms[index].split(" ");
        if (tmp[0] == "potion"){
            let blood = Number(tmp[1]);
            heal(blood);
        }else if (tmp[0] == "chest"){
            coins += Number(tmp[1]);
            console.log(`You found ${tmp[1]} coins.`)
        }else{
            let monster = tmp[0];
            let damage = Number(tmp[1]);
            death = fight(monster, damage, index);
            if (death){
                break
            }
        }
    }
    if (!death){
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
    }
}
solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])