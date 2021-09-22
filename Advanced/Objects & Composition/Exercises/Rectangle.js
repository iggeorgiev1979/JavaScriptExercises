function rectangle(width = 0, height = 0, color = ""){
    let firstLetter = color[0].toUpperCase();
    color = firstLetter + color.slice(1,);
    return {
        width,
        height,
        color,
        calcArea: () => width * height
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());