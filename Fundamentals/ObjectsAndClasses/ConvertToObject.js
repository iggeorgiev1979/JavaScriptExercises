function convert(str){
    let person = JSON.parse(str);
    Object.keys(person)
        .forEach(a => console.log(`${a}: ${person[a]}`))
}
convert('{"name": "George", "age": 40, "town": "Sofia"}')