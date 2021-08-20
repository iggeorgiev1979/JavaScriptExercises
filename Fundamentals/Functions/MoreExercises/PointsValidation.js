function pointsValidation(arr){


    let distancePontToCenter = (a, b) => Math.sqrt(a**2 + b**2);
    
    let distanceBetweenPoints = (a1, b1, a2, b2) => Math.sqrt((a1 - a2)**2 + (b1 - b2)**2);

    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);
    let messageFirstPoint = distancePontToCenter(x1, y1) == Math.trunc(distancePontToCenter(x1, y1)) ? "valid":"invalid";
    let messageSecondPoint = distancePontToCenter(x2, y2) == Math.trunc(distancePontToCenter(x2, y2)) ? "valid":"invalid";
    let messageBetweenPoints = distanceBetweenPoints(x1, y1, x2, y2) == Math.trunc(distanceBetweenPoints(x1, y1, x2, y2)) ? "valid":"invalid";
    return `{${x1}, ${y1}} to {0, 0} is ${messageFirstPoint}\n{${x2}, ${y2}} to {0, 0} is ${messageSecondPoint}\n{${x1}, ${y1}} to {${x2}, ${y2}} is ${messageBetweenPoints}`
}
console.log(pointsValidation([3, 0 , 0 , 4]));