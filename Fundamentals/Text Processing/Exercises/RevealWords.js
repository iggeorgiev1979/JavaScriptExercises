function solve(someString, someText){
    let str = String(someString);
    let txt = String(someText);
    let words = str.split(', ');
    words.forEach(el =>{
        if(txt.includes('*'.repeat(el.length))){
            txt = txt.replace('*'.repeat(el.length), el);
        }
    });
    return txt
}
console.log(solve('great, learning',
'softuni is ***** place for ******** new programming languages'));