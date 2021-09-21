function factory(wantedCar = {}){
    let power;
    let volume;
    if(wantedCar.power <= 90){
        power = 90;
        volume = 1800;
    }else if(wantedCar.power <= 120){
        power = 120;
        volume = 2400;
    }else{
        power = 200;
        volume = 3500;
    }

    let engine = {
        power,
        volume
    };
    let model = wantedCar.model;
    let carriage = {
        "type": wantedCar.carriage,
        "color": wantedCar.color 
    }
    let wheel = wantedCar.wheelsize;
    if(wheel % 2 == 0){
        wheel--;
    }
    wheels = [wheel, wheel, wheel, wheel]

    return {
        model,
        engine,
        carriage,
        wheels
    }
}
console.log(factory({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}));