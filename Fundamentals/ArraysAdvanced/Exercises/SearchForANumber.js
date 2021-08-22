function search(firstArray, secondArray){
    let [take, del, numberToSearch] = [...secondArray];
    let resultArray = firstArray.slice(0, take);
    resultArray.splice(0, del);
    resultArray = resultArray.filter(a => a == numberToSearch);
    return `Number ${numberToSearch} occurs ${resultArray.length} times.`
}
console.log(search([5, 2, 3, 4, 1, 6], [5, 2, 3]))