function solve(arr){
    let train = arr.shift()
        .split(' ')
        .map(Number);
    const maxCapacity = Number(arr.shift());

    let add = num => train.push(num);

    function embarkPassengers(num){
        for(let index = 0; index < train.length; index++){
            let freeCapacity = maxCapacity - train[index];
            if(num <= freeCapacity){
                train[index] += num;
                break;
            }
        }
    }

    for(el of arr){
        let command = el.split(' ');
        if(command[0] === 'Add'){
            add(Number(command[1]));
        }else{
            embarkPassengers(Number(command[0]));
        }
    }
    return train.join(' ');
}

console.log(solve(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']));
