function solve(arr){
    let newCat;
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        print(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(let el of arr){
        let [name, age] = el.split(" ")
        newCat = new Cat(name, age);
        newCat.print();
    }
    
}

solve(['Mellow 2', 'Tom 5'])