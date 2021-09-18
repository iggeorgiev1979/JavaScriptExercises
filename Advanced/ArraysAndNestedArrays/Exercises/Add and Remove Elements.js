function solve(arr){
    let num = 1;
    let result = [];
    for(let el of arr){
        switch(el){
            case 'add':
                result.push(num);
                num++;
            break;
            case 'remove':
                if(result.length != 0){
                    result.pop()
                }
                num++
        }
    }
    if(result.length == 0){
        return 'Empty'
    }
    return result.join('\n')
}
console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']));