function bombs(field, mine){

    let [bomb, power] = [...mine];

    let checkIndex = element => field.indexOf(element);

    let index = checkIndex(bomb);

    while(index != -1){
        let startIndex = index - power;
        if(startIndex < 0){
            field.splice(0, index + 1 + power)
        }else{
            field.splice(startIndex, power * 2 + 1);
        }
        
        index = checkIndex(bomb);
    }
    return field.reduce(function(a, b){return a + b}, 0);
}
console.log(bombs([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 3]));

