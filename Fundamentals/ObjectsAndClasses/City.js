function city(obj){
    let cityObj = {...obj};
    let keys = Object.keys(cityObj);
    for(let el of keys){
        console.log(`${el} -> ${cityObj[el]}`);
    }
}
city({name: "Sofia",area: 492,population: 1238438,country: "Bulgaria",postCode: "1000"})