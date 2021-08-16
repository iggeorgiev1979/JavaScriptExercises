function solve(radius, height){
    let volume = Math.PI * radius**2 * height / 3;
    console.log(`volume = ${volume.toFixed(4)}`);
    let area = Math.PI * radius * (radius + Math.sqrt(radius**2 + height**2));
    console.log(`area = ${area.toFixed(4)}`) 
}
solve(3, 5)