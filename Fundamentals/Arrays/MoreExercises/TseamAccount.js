function solve(arr) {

    function installGame(gameName){
        let index = gamesCatalogue.indexOf(gameName);
        if(index == -1){
            gamesCatalogue.push(gameName);
        }
    }


    function uninstallGame(gameName){
        let index = gamesCatalogue.indexOf(gameName);
        if(index != -1){
            gamesCatalogue.splice(index, 1);
        }
    }


    function updateGame(gameName){
        let index = gamesCatalogue.indexOf(gameName);
        if(index != -1){
            let updateGame = gamesCatalogue[index];
            gamesCatalogue.splice(index, 1);
            gamesCatalogue.push(updateGame);
        }
    }


    function expandGame(name){
        let gameExpansion = name.split("-");
        let gameName = gameExpansion[0];
        let expansion = gameExpansion[1];
        let index = gamesCatalogue.indexOf(gameName);
        if(index != -1){
            gamesCatalogue.splice(index + 1, 0, `${gameName}:${expansion}`);
        }
    }



    let gamesCatalogue = arr.shift().split(" ");
    for (let element of arr){
        let elementsArray = element.split(" ");
        let command = elementsArray[0];
        let game = elementsArray[1];
        if (command == "Install"){
            installGame(game);
        }else if(command == "Uninstall"){
            uninstallGame(game);
        }else if(command == "Update"){
            updateGame(game);
        }else if(command == "Expansion"){
            expandGame(game);
        }else{
            break
        }
    }
    console.log(...gamesCatalogue);
}
solve(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])