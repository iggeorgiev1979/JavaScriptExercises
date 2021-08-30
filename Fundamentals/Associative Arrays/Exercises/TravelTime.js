function travel(arr){

    function register(str){
        let [country, town, cost] = str.split(" > ");
        if(!countryLog[country]){
            countryLog[country] = {};
        }
        if(!countryLog[country][town]){
            countryLog[country][town] = Number.MAX_VALUE;
        }
        if(Number(cost) < countryLog[country][town]){
            countryLog[country][town] = Number(cost);
        }
    }

    let countryLog = {};

    arr.forEach(element => register(element));

    let countries = Object.keys(countryLog)
    .sort((a, b) => a.localeCompare(b));

    countries.forEach(country => {
        let printResult = [`${country} ->`];
        let towns = Object.keys(countryLog[country])
        .sort((a, b) => countryLog[country][a] - countryLog[country][b]);

        towns.forEach(town => {
            printResult.push(`${town} -> ${countryLog[country][town]}`);
        });
        console.log(...printResult);
    });
}
travel([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])