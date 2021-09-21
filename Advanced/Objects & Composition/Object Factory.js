function factory(some_library, some_orders){
    let library = {...some_library}
    let orders = [...some_orders];
    let result = []

    for(let el of orders){
        let action = el.parts;
        let product = {}
        product.name = el.template.name;
        for(let element of action){
            product[element] = library[element]
        }
        result.push(product)
    }
    
    
    return result
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  const products = factory(library, orders);
  console.log(products);
