function heroes(arr = []){
    result = [];
    for(let hero of arr){
        let heroArr = hero.split(" / ");
        let name = heroArr.shift();
        let level = Number(heroArr.shift());
        let items;
        if(heroArr.length > 0){
            items = heroArr[0].split(", ");
        }else{
            items = []
        };
        
        result.push({
            name,
            level,
            items
        })
    }
    return JSON.stringify(result);
}
console.log(heroes(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));