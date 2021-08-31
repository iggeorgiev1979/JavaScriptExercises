function farming(str){

    let keyMaterials = {shards:0, fragments:0, motes:0};
    let otherMaterials = {};
    let materials = [...str.split(" ")]; 

    while(keyMaterials.shards < 250 && keyMaterials.fragments < 250 && keyMaterials.motes < 250){
        let quantity = Number(materials.shift());
        let element = materials.shift().toLowerCase();
        
        if(element in keyMaterials){
            keyMaterials[element] += quantity;
        }else{
            if(!otherMaterials[element]){
                otherMaterials[element] = 0;
                }
            otherMaterials[element] += quantity;
        }
        if(materials.length == 0){
            break;
        }
    }

    let legendaryItem;
    if(keyMaterials.shards >= 250){
        legendaryItem = 'Shadowmourne';
        keyMaterials.shards -= 250;
    }else if(keyMaterials.fragments >= 250){
        legendaryItem = 'Valanyr';
        keyMaterials.fragments -= 250;
    }else if(keyMaterials.motes >= 250){
        legendaryItem = 'Dragonwrath';
        keyMaterials.motes -= 250;
    }

    console.log(`${legendaryItem} obtained!`);
    Object.keys(keyMaterials)
    .sort((a, b) =>{
        if(keyMaterials[b] - keyMaterials[a] == 0){
            return a.localeCompare(b);
        }
        return keyMaterials[b] - keyMaterials[a];
    })
    .forEach(el => console.log(`${el}: ${keyMaterials[el]}`));

    Object.keys(otherMaterials)
    .sort((a, b) => a.localeCompare(b))
    .forEach(el => console.log(`${el}: ${otherMaterials[el]}`));
}
farming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')