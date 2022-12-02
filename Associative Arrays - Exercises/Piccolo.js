function piccolo(input) {
    let setOfCars = new Set();

    for (const info of input) {
        let split = info.split(', ');
        let direction = split[0];
        let number = split[1];
        if (direction == 'IN') {
            setOfCars.add(number);
        } else {
            setOfCars.delete(number);
        }
    }
    let sorted = Array.from(setOfCars).sort((a, b) => a.localeCompare(b));
    for (const carNumber of sorted) {
        console.log(carNumber);
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);