function cardGame(input) {

    let people = new Map();

    for (let elements of input) {
        let split = elements.split(': ');
        let nameOfPerson = split.shift();

        let secondSplit = split[0].split(', ');
        let set = new Set(secondSplit);
        let finalArr = Array.from(set);
        if (!people.has(nameOfPerson)) {
            people.set(nameOfPerson, finalArr);
        } else {
            let lastArr = people.get(nameOfPerson);
            people.set(nameOfPerson, lastArr.concat(finalArr));
        }


    }
    function SumOfCars(arr) {
        let set = new Set(arr);
        let finalArray = Array.from(set);

        let sum = 0;
        for (let index = 0; index < finalArray.length; index++) {
            let symbols = finalArray[index];
            let p;
            let t;

            if (symbols.length == 3) {
                p = 10;
                switch (symbols[2]) {
                    case 'S':
                        t = 4;
                        break;
                    case 'H':
                        t = 3;
                        break;
                    case 'D':
                        t = 2;
                        break;
                    case 'C':
                        t = 1;
                        break;
                }
            } else {
                switch (symbols[0]) {
                    case '1':
                        p = 1;
                        break;
                    case '2':
                        p = 2;
                        break;
                    case '3':
                        p = 3;
                        break;
                    case '4':
                        p = 4;
                        break;
                    case '5':
                        p = 5;
                        break;
                    case '6':
                        p = 6;
                        break;
                    case '7':
                        p = 7;
                        break;
                    case '8':
                        p = 8;
                        break;
                    case '9':
                        p = 9;
                        break;
                    case 'J':
                        p = 11;
                        break;
                    case 'Q':
                        p = 12;
                        break;
                    case 'K':
                        p = 13;
                        break;
                    case 'A':
                        p = 14;
                        break;
                }
                switch (symbols[1]) {
                    case 'S':
                        t = 4;
                        break;
                    case 'H':
                        t = 3;
                        break;
                    case 'D':
                        t = 2;
                        break;
                    case 'C':
                        t = 1;
                        break;
                }

            }
            sum += p * t;


        }
        return sum;

    }
    for (let [key, value] of people) {
        console.log(key + ": " + SumOfCars(value));
    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
);