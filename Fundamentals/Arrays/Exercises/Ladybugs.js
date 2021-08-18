function solve(arg) {


    function moveRight(index, step){
        index = Number(index);
        step = Number(step);
        if (index >= 0 && index < field.length && field[index] != 0) {
            field[index] = 0;
            while (true) {
                index += step;
                if (index >= field.length) {
                    break
                }else if(field[index] == 0){
                    field[index] = 1;
                    break
                }
            }
            
        }
    }


    function moveLeft(index, step){
        index = Number(index);
        step = Number(step);
        if (index >= 0 && index < field.length && field[index] != 0) {
            field[index] = 0;
            while (true) {
                index -= step;
                if (index < 0) {
                    break
                }else if(field[index] == 0){
                    field[index] = 1;
                    break
                }
            }
            
        }
    }


    let fieldLength = arg.shift();
    let bugsIndexes = arg.shift().split(" ");
    let moves = arg;
    let field = Array(fieldLength).fill(0);
    for (let bug of bugsIndexes) {
        if (bug >= 0 && bug < fieldLength) {
            field[Number(bug)] = 1;
        }
    }

    for (let element of moves) {
        let arguments = element.split(" ");
        if (arguments[1] == "right") {
            moveRight(arguments[0], arguments[2]);
        }else{
            moveLeft(arguments[0], arguments[2]);
        }
        
    }
    console.log(...field)

}
solve([ 5, '3',
'3 left 2',
'1 left -2'])
