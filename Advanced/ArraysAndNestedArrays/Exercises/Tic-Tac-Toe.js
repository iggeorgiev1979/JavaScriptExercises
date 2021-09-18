function solve(moves){

    function checkForWinner(){
        for(let el of board){
            let set = new Set(el);
            if(set.size == 1){
                let [rr] = [...set];
                if(rr){
                    return [...set]
                }
            }
        }
        let firstDiagonal = new Set();
        let secondDiagonal = new Set();
        for(let index = 0; index < 3; index++){
            firstDiagonal.add(board[index][index]);
            secondDiagonal.add(board[index][2 - index]);
        }
        if(firstDiagonal.size == 1){
            let [rr] = [...firstDiagonal];
            if(rr){
                return [...firstDiagonal];
            }
            
        }
        if(secondDiagonal.size == 1){
            let [rr] = [...secondDiagonal];
            if(rr){
                return [...secondDiagonal];
            }
        }

        for(let i = 0; i < 3; i++){
            let set = new Set();
            for(let j = 0; j < 3; j++){
                set.add(board[j][i])
            }
            if(set.size == 1){
                let [rr] = [...set];
                if(rr){
                    return rr
                }
            }
        }

        return false
    }

    function checkForDraw(){
        for(let el of board){
            if(el.includes(false)){
                return false;
            }
        }
        return true;
    }

    
    let player = 'X'

    let board = [[false, false, false],
                 [false, false, false],
                 [false, false, false]];

    for(el of moves){
        let [row, col] = [...el.split(' ').map(Number)];
        if(board[row][col]){
            console.log("This place is already taken. Please choose another!");
        }else{
            board[row][col] = player;
            let win = checkForWinner();
            if(win){
                console.log(`Player ${win} wins!`);
                break;
            }
            let draw = checkForDraw();
            if(draw){
                console.log("The game ended! Nobody wins :(");
                break
            }
            if(player == 'X'){
                player = 'O';
            }else{
                player = 'X';
            }
        }
        
    }
    for(let el of board){
        console.log(el.join('\t'));
    }


}
solve(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"])