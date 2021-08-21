function houseParty(arr){
    let guests = [];

    function add(person){
        if(!guests.includes(person)){
            guests.push(person);
        }else{
            console.log(`${person} is already in the list!`);
        }
    }

    function remove(person){
        if(guests.includes(person)){
            guests.splice(guests.indexOf(person), 1);
        }else{
            console.log(`${person} is not in the list!`);
        }
    }

    for(let el of arr){
        let name = el.split(' ');
        if(name.length == 3){
            add(name[0]);
        }else{
            remove(name[0]);
        }
    }
    return guests.join('\n')
}

console.log(houseParty(['Allie is going!','George is going!','John is not going!','George is not going!']));