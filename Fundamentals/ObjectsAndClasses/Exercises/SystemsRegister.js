function systems(arr){

    function register(str){
        let [system, component, subComponent] = str.split(" | ");
        if(!systemLog[system]){
            systemLog[system] = {};
        }
        if(!systemLog[system][component]){
            systemLog[system][component] = [];
        }
        systemLog[system][component].push(subComponent);
    }

    function print(){
        let sys = Object.keys(systemLog)
                        .sort(function(a, b){
                            if(Object.keys(systemLog[a]).length - Object.keys(systemLog[b]).length == 0){
                                return a.toLowerCase().localeCompare(b.toLowerCase())
                            }
                            return Object.keys(systemLog[b]).length - Object.keys(systemLog[a]).length
                        });
        
        
        for(let el of sys){
            console.log(el);
            let comps = Object.keys(systemLog[el])
                                .sort((a, b) => Object.keys(systemLog[el][b]).length - Object.keys(systemLog[el][a]).length);
            for(let i of comps){
                console.log(`|||${i}`);
                for(element of systemLog[el][i]){
                    console.log(`||||||${element}`);
                }
            }
        }
        // console.log(Object.keys(systemLog[sys[0]]).length);
        // console.log(...sys)
    }

    let systemLog = {};

    for(let el of arr){
        register(el);
    }

    print();

}
systems(["SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security"])