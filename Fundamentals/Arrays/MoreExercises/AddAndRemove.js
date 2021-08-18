function solve(commands) {
    let result = [];
    for (let index = 0; index < commands.length; index++){
        if (commands[index] == "add") {
            result.push(index + 1);
        } else {
            result.pop();
        }
    }

    if (result.length > 0) {
        console.log(...result);
    } else {
        console.log("Empty");
    }
}
solve(['add', 'add', 'remove', 'add', 'add'])