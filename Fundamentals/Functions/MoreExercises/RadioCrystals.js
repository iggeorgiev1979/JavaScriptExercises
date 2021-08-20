function radioCrystals(arr){
    let desiredSize = arr.shift();
    for(let actualSize of arr){
        let cutCounter = 0;
        let lapCounter = 0;
        let grindCounter = 0;
        let etchCounter = 0;
        let xRayCounter = 0;
    
        let cut = size => size / 4;
    
        let lap = size => size * 0.8;
    
        let grind = size => size - 20;
    
        let etch = size => size - 2;
    
        let xRay = size => size + 1;
    
        console.log(`Processing chunk ${actualSize} microns`);
        while(actualSize / 4 >= desiredSize){
            actualSize = cut(actualSize);
            cutCounter += 1;
        }
        if (cutCounter != 0){
            console.log(`Cut x${cutCounter}\nTransporting and washing`)
            actualSize = Math.trunc(actualSize);
        }
        while(actualSize * 0.8 >= desiredSize){
            actualSize = lap(actualSize);
            lapCounter += 1;
        }
        if (lapCounter != 0){
            console.log(`Lap x${lapCounter}\nTransporting and washing`)
            actualSize = Math.trunc(actualSize);
        }
        while(actualSize - 20 >= desiredSize){
            actualSize = grind(actualSize);
            grindCounter += 1;
        }
        if (grindCounter != 0){
            console.log(`Grind x${grindCounter}\nTransporting and washing`);
            actualSize = Math.trunc(actualSize);
    
        }
        while(actualSize > desiredSize){
            actualSize = etch(actualSize);
            etchCounter += 1;
        }
        if (etchCounter != 0){
            console.log(`Etch x${etchCounter}\nTransporting and washing`)
            actualSize = Math.trunc(actualSize);
    
        }
        if(actualSize != desiredSize){
            actualSize = xRay(actualSize);
            console.log("X-ray x1");
        }
        console.log(`Finished crystal ${desiredSize} microns`);
    }
}
radioCrystals([1000, 4000, 8100])