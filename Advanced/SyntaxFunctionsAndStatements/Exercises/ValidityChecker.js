function solve(x1, y1, x2, y2) {
    
    let calculate = function(a, b) {return Math.sqrt(a**2 + b**2)};
    
    let distanceFirstPoint = calculate(x1, y1);
    let distanceSecondPoint = calculate(x2, y2);
    let distanceBetweenPoints = calculate(Math.abs(x1 - x2), Math.abs(y1 - y2));
    
    if(distanceFirstPoint == Math.trunc(distanceFirstPoint)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

    }

    if(distanceSecondPoint == Math.trunc(distanceSecondPoint)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

    }

    if(distanceBetweenPoints == Math.trunc(distanceBetweenPoints)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

    }
}
solve(3, 0, 0, 4)