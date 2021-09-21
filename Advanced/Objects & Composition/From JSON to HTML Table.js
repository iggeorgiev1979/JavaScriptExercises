function solve(someString = ""){
    let arr = JSON.parse(someString);
    let keys = [];
    for(let el in arr[0]){
        keys.push(el);
    }
    console.log("<table>");
    console.log(`   <tr><th>${keys.join("</th><th>")}</th></tr>`);
    for(let el of arr){
        let values = [];
        for(let key in el){
            values.push(el[key]);
        }
        console.log(`   <tr><td>${values.join("</td><td>")}</td></tr>`);
    }
    console.log("</table>");
}
solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`)