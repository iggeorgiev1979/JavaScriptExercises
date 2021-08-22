function manipulate(a, b){

    let addEl = (index, element) => arr.splice(index, 0, element);

    function addManyEl(index, arrOfElements){
        for(el of arrOfElements){
            arr.splice(index, 0, el);
            index++
        }
    }

    let removeEl = index => arr.splice(index, 1);

    function shiftEl(positions){
        for(index = 1; index <= positions; index++){
            let el = arr.shift();
            arr.push(el);
        }
        // arr.push(...arr.slice(0, positions));
        // arr.splice(0, positions);
    }

    function sum(){
        let result = [];
        while(arr.length > 0){
            if(arr.length == 1){
                result.push(arr[0]);
                arr.shift();
            }else{
                let firstElement = arr.shift();
                let secondElement = arr.shift();
                result.push(firstElement + secondElement);
            }
        }
        return result;
    }

    var arr = [...a];
    var commands = [...b];
    for(element of commands){
        let command = element.split(" ");
        let name = command.shift();
        if(command[0] != "print"){
            command = command.map(Number);
        }
        switch(name){
            case "add":
                addEl(command[0], command[1]);
                break;
            case "addMany":
                addManyEl(command[0], command.slice(1,));
                break;
            case "contains":
                console.log(arr.indexOf(command[0]));
                break;
            case "remove":
                removeEl(command[0]);
                break;
            case "shift":
                shiftEl(command[0]);
                break;
            case "sumPairs":
                arr = sum();
                break;
            case "print":
                return `[ ${arr.join(", ")} ]`;
        }
    }
    // return `[ ${arr.join(", ")} ]`
}
console.log(manipulate([2, 2, 4, 2, 4], ["add 7 4", "sumPairs", "remove 11", "print"]))
