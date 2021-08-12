function calculate(arg){
    let r = Number(arg.shift());
    let area = Math.PI * r * r;
    let perimeter = Math.PI * r * 2;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
calculate(5)
