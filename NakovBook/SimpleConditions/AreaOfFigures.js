function solve([arg1, arg2, arg3]){
    if (arg1 == "square"){
        let side = parseFloat(arg2);
        var area = side**2;
    }else if (arg1 == "rectangle"){
        let side = parseFloat(arg2);
        let height = parseFloat(arg3);
        var area = side * height;
    }else if (arg1 == "circle"){
        let r = parseFloat(arg2);
        var area = Math.PI * r**2;
    }else{
        let side = parseFloat(arg2);
        let height = parseFloat(arg3);
        var area = side * height / 2;
    }
    console.log(Math.round(area * 1000) / 1000);
}
solve(["triangle",4.5, 20])