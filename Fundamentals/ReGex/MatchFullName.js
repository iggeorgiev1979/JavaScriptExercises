function solve(someString){
    let str = String(someString);
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;

    let match = str.match(pattern);
    return match.join(' ')
}
console.log(solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"));