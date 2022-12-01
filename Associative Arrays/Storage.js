function storage(input) {

    let map = new Map();
    for (let element of input) {
        let split = element.split(' ');
        let product = split[0];
        let quantity = Number(split[1]);
        if (map.has(product)) {
            let current = map.get(product);
            current += quantity;
            map.set(product, current);
        }
        else {
            map.set(product, quantity)
        }
    }

    for (let [key,value] of map.entries()) {

        console.log(key+' -> '+value);
    }


}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);