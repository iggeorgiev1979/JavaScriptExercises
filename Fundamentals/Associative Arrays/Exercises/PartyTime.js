function party(arr){

    let partyIndex = arr.indexOf("PARTY");
    let expectedGuests = arr.slice(0, partyIndex);
    let guests = arr.slice(partyIndex + 1,);

    guests.forEach(element => {
        if(expectedGuests.includes(element)){
            expectedGuests.splice(expectedGuests.indexOf(element), 1);
        }
    });
    console.log(`${expectedGuests.length}
${expectedGuests.filter(el => !isNaN(el[0])).join("\n")}
${expectedGuests.filter(el => isNaN(el[0])).join("\n")}`);

}
party(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])