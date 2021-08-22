function bunnies(matrix){

    function attackLeft(x, y){
        if(y > 0){
            maze[x][y - 1] -= maze[x][y];
        }
    }

    function attackRight(x, y){
        if(y < maze[x].length -1){
            maze[x][y + 1] -= maze[x][y];
        }
    }

    function attackUp(x, y){
        if(x > 0){
            maze[x-1][y] -= maze[x][y];
        }
    }

    function attackDown(x, y){
        if(x < maze.length - 1){
            maze[x+1][y] -= maze[x][y]
        }
    }

    function attackLeftUp(x, y){
        if(y > 0 && x > 0){
            maze[x - 1][y - 1] -= maze[x][y];
        }
    }

    function attackLeftDown(x, y){
        if(x < maze.length - 1 && y > 0){
            maze[x + 1][y - 1] -= maze[x][y];
        }
    }

    function attackRightUp(x, y){
        if(x > 0 && y < maze[x -1].length - 1){
            maze[x - 1][y + 1] -= maze[x][y];
        }
    }

    function attackRightDown(x, y){
        if(x < maze.length - 1 && y < maze[x + 1].length - 1){
            maze[x + 1][y + 1] -= maze[x][y];
        }
    }

    let coordinates = matrix.pop().split(" ");
    let maze = [];
    let damage = 0;
    let bunniesKilled = 0;
    for(let el of matrix){
        maze.push(el.split(" ").map(Number));
    }
    
    for(let el of coordinates){
        let[row, column] = [...el.split(",").map(Number)];
        if(maze[row][column] > 0){
            attackLeft(row, column);
            attackRight(row, column);
            attackUp(row, column);
            attackDown(row, column);
            attackLeftUp(row, column);
            attackLeftDown(row, column);
            attackRightUp(row, column);
            attackRightDown(row, column);
            damage += maze[row][column];
            bunniesKilled += 1;
            maze[row][column] = 0;
        }
        
    }
    for(let i = 0; i < maze.length; i++){
        for(let j = 0; j < maze[i].length; j++){
            if(maze[i][j] > 0){
                bunniesKilled += 1;
                damage += maze[i][j];
            }
        }
    }

    return `${damage}\n${bunniesKilled}`
    
}
console.log(bunnies(['5 10 15 20', '10 10 10 10', '10 15 10 10', '10 10 10 10', '2,2 0,1']))