function solve(country){
    const countries = {"England":"English", "USA":"English", "Spain":"Spanish", "Argentina":"Spanish", "Mexico":"Spanish"};
    let result = (country in countries) ? countries[country]:"unknown";
    console.log(result);
}
solve("Spain")