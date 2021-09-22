function createSortedList(){
    let list = []
    return {
        list,
        size: list.length,
        add: function(element){
            list.push(element);
            this.size = list.length;
            if(this.size > 1){
                list.sort((a, b) => a - b);
            }
        },
        remove: function(index){
            if(index >= 0 && index < this.size){
                list.splice(index, 1)
            this.size = list.length;
            if(this.size > 1){
                list.sort((a, b) => a - b);
            }
            }
            
        },
        get: function(index){
            return list[index];
        } 

    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));