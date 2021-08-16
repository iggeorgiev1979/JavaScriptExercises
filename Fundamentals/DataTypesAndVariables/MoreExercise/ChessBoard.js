function solve(num){
    let colour = "black";


    function span(arg){
        return `    <span class="${arg}"></span>`;
    }


    function changeColour(arg){
        if (arg == "black"){
            return "white";
        }else{
            return "black";
        }
    }

    
    let startDiv = "  <div>";
    let endDiv = "  </div>";
    console.log("<div class=\"chessboard\">");
    for (let i = 0; i < num; i++){
        console.log(startDiv);
        for (let j = 0; j < num; j++){
            console.log(span(colour));
            colour = changeColour(colour);
        }
        if (num % 2 == 0){
            colour = changeColour(colour);
        }
        console.log(endDiv);
    }
    console.log("</div>");
}
solve(4)