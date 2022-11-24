function solve(firstArr, secondArr) {

    let objects = {};
    for (let index = 0; index < firstArr.length; index+=2) {
        objects[firstArr[index]]= Number(firstArr[index+1]);
        
    }
    for (let index = 0; index < secondArr.length; index+=2) {
        if (objects.hasOwnProperty(secondArr[index])) {
            objects[secondArr[index]] += Number(secondArr[index+1]);
        }else{
            objects[secondArr[index]] = Number(secondArr[index+1]);
        }
        
    }
    for (let obj in objects) {
        console.log(`${obj} -> ${objects[obj]}`);
    }
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);