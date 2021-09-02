function solve(someString){
    let result = []
    let str = String(someString);
    let pattern = /(?<day>\d{2})(?<separator>\.|\/|\-)(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    while((match = pattern.exec(str)) !== null){
        let day = match.groups['day'];
        let month = match.groups['month'];
        let year = match.groups['year'];
        result.push(`Day: ${day}, Month: ${month}, Year: ${year}`)
    }
    return result.join('\n')
}
console.log(solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"));