function armor(arr){

    function buy(el){
        let index = equipment.indexOf(el);
        if(index == -1){
            equipment.push(el);
        }
    }

    function trash(el){
        let index = equipment.indexOf(el);
        if(index != -1){
            equipment.splice(index, 1);
        }
    }

    function repair(el){
        let index = equipment.indexOf(el);
        if(index != -1){
            let item = equipment.splice(index, 1);
            equipment.push(item);
        }
    }

    function upgrade(el){
        let item = el.split("-")
        let index = equipment.indexOf(item[0]);
        if(index != -1){
            equipment.splice(index + 1, 0, `${item[0]}:${item[1]}`);
        }
    }

    let commands = [...arr];
    let equipment = commands.shift().split(" ");
    
    for(element of commands){
        let tmp = element.split(" ");
        let command = tmp[0];
        let armorName = tmp[1];
        switch(command){
            case "Buy":
                buy(armorName);
            break;
            case "Trash":
                trash(armorName);
            break;
            case "Repair":
                repair(armorName);
            break;
            case "Upgrade":
                upgrade(armorName);
            break;
        } 
    }
    return equipment.join(" ")
}
console.log(armor(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']))