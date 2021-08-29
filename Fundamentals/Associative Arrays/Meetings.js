function meetings(arr){

    function register(str){
        let [day, name] = str.split(" ");
        if(!log[day]){
            log[day] = name;
            console.log(`Scheduled for ${day}`)
        }else{
            console.log(`Conflict on ${day}!`)
        }
    }

    let log = {};
    arr.forEach(el => register(el));
    for(let [key, value] of Object.entries(log)){
        console.log(`${key} -> ${value}`)
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])