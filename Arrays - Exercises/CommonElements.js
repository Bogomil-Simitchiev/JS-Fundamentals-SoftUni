function solve(first, second) {

    let commonElements = [];
    for (let index = 0; index < first.length; index++) {

        let el = first[index];
        for (let i = 0; i < second.length; i++) {
            if (el === second[i]) {
                commonElements.push(el);
            }

        }

    }
    commonElements.forEach(element => {
        console.log(element);
    });

}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)