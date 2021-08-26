function solve(arr){
    let newCat;
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
    }

    for(let el of arr){
        let [name, age] = el.split(" ")
        newCat = new Cat(name, age);

        console.log(`${newCat.name}, age ${newCat.age} says Meow`)
    }
    
}

solve(['Mellow 2', 'Tom 5'])