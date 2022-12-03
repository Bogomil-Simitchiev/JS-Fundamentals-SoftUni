function companyUsers(input) {
    let map = new Map();

    for (let element of input) {
        let splitElements = element.split(' -> ');
        let company = splitElements[0];
        let number = splitElements[1];

        if (!map.has(company)) {
            let set = new Set();
            set.add(number);
            map.set(company, set);
        } else {
            let lastSet = map.get(company);
            map.set(company, lastSet.add(number));
        }

    }
    let sorted = Array.from(map).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [key, value] of sorted) {
        console.log(key);
        for (const number of value) {
            console.log(`-- ${number}`);
        }
    }

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);