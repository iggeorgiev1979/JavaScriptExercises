function army(arr){

    function register(str){
        if(str.includes("arrives")){
            let [name, tmp] = str.split(" arrives");
            if(!armyLog.hasOwnProperty(name)){
                armyLog[name] = {};
            }
        }else if(str.includes(":")){
            let [generalName, armyInfo] = str.split(": ");
            if(generalName in armyLog){
                let [armyName, armyCount] = armyInfo.split(", ");
                if(!armyLog[generalName][armyName]){
                    armyLog[generalName][armyName] = 0;
                }
                armyLog[generalName][armyName] += Number(armyCount);
            }
        }else if(str.includes("+")){
            let [armyName, armyCount] = str.split(" + ");
            for(let el of Object.keys(armyLog)){
                if(armyName in armyLog[el]){
                    armyLog[el][armyName] += Number(armyCount);
                    break;
                }
            }
        }else if(str.includes("defeated")){
            let [name, tmp] = str.split(" defeated");
            if(name in armyLog){
                delete armyLog[name];
            }
        }
    }

    function calculateTotal(obj){
        let result = 0;
        Object.keys(obj)
        .forEach(el => result += obj[el]);

        return result;
    }

    let armyLog = {};

    for(let element of arr){
        register(element);
    }

    let generals = Object.keys(armyLog);
    generals = generals.sort((a, b) => calculateTotal(armyLog[b]) - calculateTotal(armyLog[a]));

    generals.forEach(el =>{
        console.log(`${el}: ${calculateTotal(armyLog[el])}`);
        Object.keys(armyLog[el])
        .sort((a, b) => armyLog[el][b] - armyLog[el][a])
        .forEach(element => console.log(`>>> ${element} - ${armyLog[el][element]}`));
    });


}
army(['Rick Burr arrives',
'Fergus: Wexamp, 30245',
'Rick Burr: Juard, 50000',
'Findlay arrives',
'Findlay: Britox, 34540',
'Wexamp + 6000', 'Juard + 1350',
'Britox + 4500',
'Porter arrives',
'Porter: Legion, 55000',
'Legion + 302',
'Rick Burr defeated',
'Porter: Retix, 3205'])