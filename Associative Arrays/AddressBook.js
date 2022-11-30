function address(input) {

    let people = {};

    for (let element of input) {
        let split = element.split(':');
        let name = split[0];
        let street = split[1];

        people[name] = street;
    }
    let entries = Object.entries(people);

    entries.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    })


   

    for (let [key, value] of entries) {
        console.log(key + " -> " + value);
    }


}
address(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);