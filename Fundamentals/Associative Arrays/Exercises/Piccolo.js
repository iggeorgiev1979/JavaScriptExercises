function piccolo(arr){

    let parking = [];

    for(el of arr){
        let [direction, carNumber] = el.split(", ");
        switch (direction) {
            case "IN":
                if(!parking.includes(carNumber)){
                    parking.push(carNumber);
                }
                break;
        
            case "OUT":
                if(parking.includes(carNumber)){
                    parking.splice(parking.indexOf(carNumber), 1);
                }
                break;
        }
        
    }
    if(parking.length == 0){
        console.log('Parking Lot is Empty');
    }else{
        parking.sort()
        .forEach(el => console.log(el));
    }

}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])