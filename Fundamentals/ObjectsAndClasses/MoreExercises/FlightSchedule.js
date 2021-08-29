function flights(arr){

    function register(){
        for(let el of scheduledFlights){
            let [flight, destination] = el.split(" ");
            flightLog[flight] = [destination, 'Ready to fly'];
        }
    }

    function changeStatus(){
        for(let el of statusChange){
            let [flight, status] = el.split(" ");
            if(flightLog[flight]){
                flightLog[flight][1] = status;
            }
            
        }
    }

    function print(){
        let key = Object.keys(flightLog)
                        .filter(a => flightLog[a][1] == neededStatus);
        
        key.forEach(element => console.log(`{ Destination: '${flightLog[element][0]}', Status: '${flightLog[element][1]}' }`));
    }

    let scheduledFlights =[...arr.shift()];
    let statusChange = [...arr.shift()];
    let neededStatus = arr.shift();
    let flightLog = {};

    register();
    changeStatus();
    print();


}
flights([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
])