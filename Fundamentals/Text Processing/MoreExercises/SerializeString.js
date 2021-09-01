function solve(someArray){

    let str = String(someArray[0]);
    let characters = {};
    let result = [];
    for(let index = 0; index < str.length; index++){
        let el = str[index];
        if(!Object.keys(characters).includes(el)){
            characters[el] = [];
        }
        characters[el].push(index);
    }

    Object.keys(characters)
    .forEach(el => result.push(`${el}:${characters[el].join('/')}`));

    return result.join('\n')
    
}
console.log(solve(["abababa"]));