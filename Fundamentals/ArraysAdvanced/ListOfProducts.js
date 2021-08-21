function listOfProducts(arr){
    return arr
    .sort()
    .map((element, index) => `${index + 1}.${element}`)
    .join("\n");
}
console.log(listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]))

// (a, b) => a.localeCompare(b)