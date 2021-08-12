function calculate([arg1, arg2]){
    let length = parseFloat(arg1);
    let width = parseFloat(arg2);
    width -= 1;
    // let half_width = width / 2;
    let a = width / 0.7;
    let b = length / 1.2;
    let seats = Math.floor(a) * Math.floor(b);
    console.log(seats - 3);
}
calculate([8.4, 5.2])
