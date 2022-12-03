function minerTask(input) {
    let map = new Map();
    for (let index = 0; index < input.length; index += 2) {
        let resource = input[index];
        let quantity = Number(input[index+1]);
        if (!map.has(resource)) {
            map.set(resource, quantity);
        } else {
            let lastQuantity = map.get(resource);
            map.set(resource, lastQuantity + quantity);
        }

    }

    for (let [key,value] of map) {
        console.log(`${key} -> ${value}`);
    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
);