function game(arr){

    function register(str){
        let [name, cards] = str.split(": ");
        cards = cards.split(", ");

        if(!playersLog[name]){
            playersLog[name] = [];
        }
        cards.forEach(element => {
            if(!playersLog[name].includes(element)){
                playersLog[name].push(element);
            }
        });
    }

    function calculate(cards){
        let value = 0;
        cards.forEach(element => {
            let type = element.slice(-1);
            let power = element.slice(0, element.length -1);
            value += cardPower[power] * cardType[type];
        });
        return value;
    }

    let cardPower = {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':11, 'Q':12, 'K':13, 'A':14};
    let cardType = {'S':4, 'H':3, 'D':2, 'C':1};

    let playersLog = {};

    arr.forEach(element => {
        register(element);
    });

    Object.keys(playersLog)
    .forEach(el => playersLog[el] = calculate(playersLog[el]))
    
    Object.keys(playersLog).forEach(el => console.log(`${el}: ${playersLog[el]}`))
}
game([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ])