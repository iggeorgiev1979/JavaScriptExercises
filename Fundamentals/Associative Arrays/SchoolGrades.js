function grades(arr){

    function register(str){
        let tmp = str.split(" ");
        let name = tmp.shift();
        tmp = tmp.map(Number);
        if(!gradesLog[name]){
            gradesLog[name] = [];
        }
        gradesLog[name].push(...tmp);
    }

    let gradesLog = {};

    arr.forEach(el => register(el));

    Object.keys(gradesLog).sort(function(a, b){
        let firstSum = gradesLog[a].reduce(function(i, j){return i + j}, 0);
        firstSum /= gradesLog[a].length;
        let secondSum = gradesLog[b].reduce(function(i, j){return i + j}, 0);
        secondSum /= gradesLog[b].length;
        return firstSum - secondSum;
    })
                            .forEach(el => console.log(`${el}: ${gradesLog[el].join(", ")}`));
}
grades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])