function solve(arg){
    let username = arg.shift();
    let password = username.split("").reverse().join("");
    let n = arg.length;
    for (i  = 0; i < n; i++){
        if (arg[i] == password){
            console.log(`User ${username} logged in.`);
            break
        }else{
            if (i == 3){
                console.log(`User ${username} blocked!`)
                break
            }else{
                console.log("Incorrect password. Try again.");
            }
        }
    }
}
solve(['Acer','login','go','let me in','recA'])
