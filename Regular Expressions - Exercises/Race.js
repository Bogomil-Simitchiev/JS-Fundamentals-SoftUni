function solve(input) {
    let listOfPeople = input.shift().split(', ');

    let map = new Map();

    for (let index = 0; index < input.length - 1; index++) {
        let currentInfo = input[index];
        let patternForName = /(?<letters>[A-Za-z])/g;
        let patternForDigits = /(?<digits>[\d])/g;

        let match = currentInfo.match(patternForName);
        let matchForDigits = currentInfo.match(patternForDigits);

        let sum = SumOfDigits(matchForDigits);

        if (listOfPeople.includes(match.join(''))) {
            if (map.has(match.join(''))) {
                let lastSum = map.get(match.join(''));
                map.set(match.join(''), lastSum + sum);
            } else {
                map.set(match.join(''), sum);
            }
        }


    }
    function SumOfDigits(array) {
        let sum = 0;
        for (let element of array) {
            sum += Number(element);
        }
        return sum;
    }
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
    let count = 1;
    for (let [key, value] of sorted) {
        if (count == 1) {
            console.log(`1st place: ${key}`);
        } else if (count == 2) {
            console.log(`2nd place: ${key}`);
        } else if (count == 3) {
            console.log(`3rd place: ${key}`);
        } else {
            break;
        }
        count++;
    }

}
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);