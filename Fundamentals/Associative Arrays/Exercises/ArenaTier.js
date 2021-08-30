function arena(arr){

    function register(str){
        let [name, technique, skill] = str.split(" -> ");
        skill = Number(skill);

        if(!pool[name]){
            pool[name] = {'totalSkill':0};
        }
        if(!pool[name][technique]){
            pool[name][technique] = 0;
        }
        if(pool[name][technique] < skill){
            let tmp = skill - pool[name][technique];
            pool[name][technique] = skill;
            pool[name].totalSkill += tmp;
        }
    }

    function duel(str){
        let [firstFighter, secondFighter] = str.split(" vs ");

        if(pool[firstFighter] && pool[secondFighter]){

            let firstFighterKeys = Object.keys(pool[firstFighter]);

            let secondFighterKeys = Object.keys(pool[secondFighter]);

            for(let element of firstFighterKeys){
                for(let el of secondFighterKeys){
                    if(el != 'totalSkill' && el === element){
                        if(pool[firstFighter]['totalSkill'] > pool[secondFighter]['totalSkill']){
                            delete pool[secondFighter];
                            break;
                        }else if(pool[firstFighter]['totalSkill'] < pool[secondFighter]['totalSkill']){
                            delete pool[firstFighter];
                            break;
                        }
                    }
                    if(!pool[firstFighter] || !pool[secondFighter]){
                        break;
                    }
                }
            }
        }


    }

    let pool ={};

    for(let gladiator of arr){
        if(gladiator.includes(' -> ')){
            register(gladiator);
        }else if(gladiator.includes(' vs ')){
            duel(gladiator);
        }else{
            break;
        }
    }

    let gladiators = Object.keys(pool)
    .sort((a, b) =>{
        if(pool[b]['totalSkill'] - pool[a]['totalSkill'] == 0){
            return a.localeCompare(b);
        }
        return pool[b]['totalSkill'] - pool[a]['totalSkill'];
    });

    gladiators.forEach(gladiator => {
        console.log(`${gladiator}: ${pool[gladiator]['totalSkill']} skill`);
        let tech = Object.keys(pool[gladiator])
        .sort((a, b) => {
            if(pool[gladiator][b] - pool[gladiator][a] == 0){
                return a.localeCompare(b);
            }
            return pool[gladiator][b] - pool[gladiator][a]
        });

        tech.forEach(element => {
            if(element != 'totalSkill'){
                console.log(`- ${element} <!> ${pool[gladiator][element]}`);
            }
        });
    });

}
arena([
        'Pesho -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
        ])