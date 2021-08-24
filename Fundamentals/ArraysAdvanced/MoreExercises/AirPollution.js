function pollution(firstArr, secondArr){

    function breeze(num){
        for(let index = 0; index < 5; index++){
            town[num][index] -= 15;
            if(town[num][index] < 0){
                town[num][index] = 0;
            }
        }
    }

    function gale(num){
        for(let index = 0; index < 5; index++){
            town[index][num] -= 20;
            if(town[index][num] < 0){
                town[index][num] = 0;
            }
        }
    }

    function smog(num){
        for(let row = 0; row < 5; row++){
            for(column = 0; column < 5; column++){
                town[row][column] += num;
            }
        }
    }

    function findPollution(){
        let pollutedBlocks = [];
        for(let row = 0; row < 5; row++){
            for(column = 0; column < 5; column++){
                if(town[row][column] >= 50){
                    pollutedBlocks.push(`[${row}-${column}]`);
                }
            }
        }
        if(pollutedBlocks.length > 0){
            return `Polluted areas: ${pollutedBlocks.join(", ")}`
        }
        return "No polluted areas"
    }

    let town = [];
    for(let index = 0; index < 5; index++){
        town.push(firstArr[index].split(" ").map(Number));
    }
    for(let command of secondArr){
        let[type, value] = command.split(" ");
        value = Number(value);
        switch(type){
            case "breeze":
                breeze(value);
            break;
            case "gale":
                gale(value);
            break;
            case "smog":
                smog(value);
            break;
        }
    }
    return findPollution();
}
console.log(pollution(["5 7 72 14 4","41 35 37 27 33","23 16 27 42 12","2 20 28 39 14","16 34 31 10 24"], ["breeze 1", "gale 2", "smog 25"]))