function minerTask(arr){

    let resources = {};

    for(let index = 0; index < arr.length; index += 2){
        let resource = arr[index];
        let quantity = Number(arr[index + 1]);

        if(!resources[resource]){
            resources[resource] = 0;
        }
        resources[resource] += quantity;
    }

    Object.keys(resources)
    .forEach(el => console.log(`${el} -> ${resources[el]}`));
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])