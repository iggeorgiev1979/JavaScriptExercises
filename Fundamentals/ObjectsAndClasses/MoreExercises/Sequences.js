function sequence(arr){

    function manipulate(str){
        str = str.slice(1, str.length -1);
        result.push(str.split(", ").map(Number).sort((a, b) => b - a).join(", "));
    }

    let result = [];
    arr.forEach(el => manipulate(el));
    let resultSet = new Set(result);
    result = [...resultSet]
    result.sort((a, b) => a.split(", ").length - b.split(", ").length).forEach(a => console.log(`[${a}]`));

}
sequence(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"])