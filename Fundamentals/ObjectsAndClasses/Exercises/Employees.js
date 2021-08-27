function solve(arr){
    class Employee{
         constructor(name){
            this.name = name;
            this.number = name.length;
        }
        print(){
            console.log(`Name: ${this.name} -- Personal Number: ${this.number}`);
        }
    }

    for(let el of arr){
        let newObj = new Employee(el);
        newObj.print();
    }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])