function solve(){
    return {
        fighter: function(name = ""){
            let health = 100;
            let stamina = 100;
            return {
                name,
                health,
                stamina,
                fight: function(){
                    console.log(`${name} slashes at the foe!`);
                    this.stamina -= 1;
                }
            }
        },
        mage: function(name = ""){
            let health = 100;
            let mana = 100;
            return {
                name,
                health,
                mana,
                cast: function(spell = ""){
                    console.log(`${name} cast ${spell}`);
                    this.mana -= 1;
                }
            }
        }
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);