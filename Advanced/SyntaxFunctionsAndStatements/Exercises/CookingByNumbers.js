function solve(someNumber, el1, el2, el3, el4, el5){
    let ar = [el1, el2, el3, el4, el5]
    let num = Number(someNumber);
    for(let el of ar){
        switch(el){
            case 'chop':
                num /= 2;
                console.log(num);
            break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
            break;
            case 'spice':
                num += 1;
                console.log(num);
            break;
            case 'bake':
                num *= 3;
                console.log(num);
            break;
            case 'fillet':
                num *= 0.8;
                console.log(num.toFixed(1));
            break;
        }
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')