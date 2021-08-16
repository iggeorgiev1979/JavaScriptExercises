function solve(arg1, arg2, arg3){
    let a = arg1.replace("_", arg2);
    if (a == arg3){
        console.log("Matched");
    }else{
        console.log("Not Matched");
    }
}
solve("Str_ng", "i", "String")