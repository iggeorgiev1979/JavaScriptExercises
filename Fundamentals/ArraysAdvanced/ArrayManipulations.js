function arrayManipulator(arr){
    let numbersArray = arr.shift()
                        .split(" ")
                        .map(Number);

    let commands = arr.slice();

    let add = (num) => numbersArray.push(num);

    let removeAt = num => numbersArray.splice(num, 1);

    let insert = (num, index) => numbersArray.splice(index, 0, num);

    for (element of commands){
        let comm = element.split(" ");
        if(comm[0] == "Add"){
            add(Number(comm[1]));
        }else if(comm[0] == "Remove"){
            numbersArray = numbersArray.filter(el => el != Number(comm[1]));
        }else if(comm[0] == "RemoveAt"){
            removeAt(Number(comm[1]));
        }else if(comm[0] == "Insert"){
            insert(Number(comm[1]), Number(comm[2]));
        }
    }
    return numbersArray.join(" ");
}
console.log(arrayManipulator(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']))