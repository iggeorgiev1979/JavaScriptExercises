function solve([pool_volume, pipe1_flow, pipe2_flow, hours]){
    let pipe1_volume = pipe1_flow * hours;
    let pipe2_volume = pipe2_flow * hours;
    let total_volume = pipe1_volume + pipe2_volume;
    if (total_volume > pool_volume){
        console.log(`For ${hours} hours the pool overflows with ${total_volume - pool_volume} liters.`)
    }else{
        let x = total_volume * 100 / pool_volume;
        let p1 = pipe1_volume * 100 / total_volume;
        let p2 = pipe2_volume * 100 / total_volume;
        console.log(`The pool is ${Math.trunc(x)}% full. Pipe 1: ${Math.trunc(p1)}%. Pipe 2: ${Math.trunc(p2)}%.`)
    }
}
solve([500, 100, 100, 2.5])