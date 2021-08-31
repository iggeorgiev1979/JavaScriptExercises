function garage(arr){

    function register(str){
        let [garageNumber, car] = str.split(" - ");
        let garageSign = `Garage № ${garageNumber}`;
        let carInfo = car.split(", ");
        let tmpGarage = [];
        if(!garageLog[garageSign]){
            garageLog[garageSign] = [];
        }
        carInfo.forEach(element => {
            let tmp = element.split(": ");
            tmpGarage.push(`${tmp[0]} - ${tmp[1]}`);
        });
        garageLog[garageSign].push(`--- ${tmpGarage.join(", ")}`)
    }

    let garageLog = {}
    
    arr.forEach(el => register(el));

    Object.keys(garageLog)
    .sort()
    .forEach(element =>{
        console.log(element);
        console.log(garageLog[element].join("\n"));
    })

}
garage(['1 - color: blue, fuel type: diesel',
'1 - color: red, manufacture: Audi',
'2 - fuel type: petrol',
'4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])