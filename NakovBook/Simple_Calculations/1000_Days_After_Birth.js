function calculate([arg]){
    function prepare_date(arg){
    
        return arg.split("-");
    }
    let mydate = prepare_date(arg);
    let dd = mydate[0];
    let mm = mydate[1];
    let yyyy = mydate[2];

    let mynewdate = new Date(`${mm}-${dd}-${yyyy}`);
    mynewdate.setDate(mynewdate.getDate() + 1000);
    dd = mynewdate.getDate();
    mm = mynewdate.getMonth() + 1;
    yyyy = mynewdate.getFullYear();

    if (dd < 10){
        dd = "0" + dd;
    }
    if (mm < 10){
        mm = "0" + mm;
    }
    console.log(`${dd}-${mm}-${yyyy}`)
}
calculate(["25-02-1995"])
