function travel(input) {

    let map = {};


    for (const elements of input) {
        let splitInfo = elements.split(' > ');
        let country = splitInfo[0];
        let town = splitInfo[1];
        let cost = Number(splitInfo[2]);

        if (!map.hasOwnProperty(country)) {
            map[country] = {};
        }

        if (!map[country].hasOwnProperty(town)) {
            map[country][town] = cost
        }

        let lastCost = map[country][town];
        if (lastCost > cost) {
            map[country][town] = cost;
        }


    }
    console.log(map['Bulgaria']);

    let sorted = Object.keys(map).sort((a, b) => a.localeCompare(b));

    for (const country of sorted) {
        console.log(`${country} -> ${cityPrice(map[country])}`);
    }

    function cityPrice(obj) {
        let pairs = Object.entries(obj).sort((a, b) => a[1] - b[1]);
        let result = [];
        for (let [key, value] of pairs) {
            result.push(`${key} -> ${value}`);
        }
        return result.join(' ');
    }

}
travel([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);