function solve(input) {
    let objects = [];
    for (let index = 0; index < input.length; index++) {
        let currentInfo = input[index].split(' | ');
        let town = currentInfo[0];
        let latitude = Number(currentInfo[1]).toFixed(2);
        let longitude = Number(currentInfo[2]).toFixed(2);

        let obj = {
            town,
            latitude,
            longitude
        }
        objects.push(obj);


    }

    for (let obj of objects) {
        console.log(obj);
    }
}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);