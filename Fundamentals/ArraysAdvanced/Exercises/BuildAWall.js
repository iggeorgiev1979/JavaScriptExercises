function build(arr){

    function work(){
        let counter = 0;
        for(let index = arr.length - 1; index >= 0; index--){
            if(arr[index] < 30){
                arr[index] += 1;
                counter += 195;
            }
            if(arr[index] == 30){
                arr.splice(index, 1);
            }
        }
        return counter;
    }

    arr = arr.map(Number);
    let days = [];
    let concreteCounter = 0;

    while(arr.length > 0){
        concreteCounter = work();
        days.push(concreteCounter);
        concreteCounter = 0;
    }
    let sum = days.reduce(function(a, b){return a + b}, 0);
    return `${days.join(", ")}\n${sum * 1900} pesos`
}
console.log(build([21, 25, 28]))