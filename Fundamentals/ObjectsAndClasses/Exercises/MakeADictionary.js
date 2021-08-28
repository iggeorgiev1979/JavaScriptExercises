function dict(arr){

    function register(str){
        let newObj = JSON.parse(str);
        let key = Object.keys(newObj);
        dictionary[key[0]] = newObj[key];
    }

    let dictionary = {}

    for(let el of arr){
        register(el)
    }

    let key = Object.keys(dictionary)
                    .sort((a, b) => a.localeCompare(b));

    for(let el of key){
        console.log(`Term: ${el} => Definition: ${dictionary[el]}`)
    }
}
dict([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])