function companyUsers(arr){

    function register(str){
        let [companyName, userId] = str.split(" -> ");
        if(!companyLog[companyName]){
            companyLog[companyName] = [];
        }
        if(!companyLog[companyName].includes(userId)){
            companyLog[companyName].push(userId);
        }
    }

    let companyLog = {};

    arr.forEach(element => {
        register(element);
    });

    let key = Object.keys(companyLog)
    .sort((a, b) => a.localeCompare(b))
    .forEach(el =>{
        console.log(el);
        companyLog[el].forEach(user => {
            console.log(`-- ${user}`);
        });
    })
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])