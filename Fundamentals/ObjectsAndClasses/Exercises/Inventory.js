function heroes(arr){

    function register(str){
        let [name, level, itemsStr] = str.split(" / ");
        let items = itemsStr.split(", ");
        heroesLog.push({"Hero":name, "level":Number(level), items})
    }

    function print(){
        for(let hero of heroesLog){
            hero.items.sort((a, b) => a.localeCompare(b));
            console.log(`Hero: ${hero.Hero}\nlevel => ${hero.level}\nitems => ${hero.items.join(", ")}`);
        }
    }

    let heroesLog = [];

    for(let el of arr){
        register(el);
    }
    
    heroesLog.sort((a, b) => a.level - b.level);
    print();
    
}
heroes([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ])