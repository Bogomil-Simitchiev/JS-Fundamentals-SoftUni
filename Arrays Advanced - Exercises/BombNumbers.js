function bombNumbers(numbers, specialBombNumberAndPower) {
    let bombNumber = specialBombNumberAndPower[0];
    let power = specialBombNumberAndPower[1];

    let indexOfBomb = numbers.indexOf(bombNumber);
    while (indexOfBomb!=-1) {

        let startIndex = Math.max(0,indexOfBomb - power);
        let expl = power * 2 + 1;

        numbers.splice(startIndex, expl);

        indexOfBomb = numbers.indexOf(bombNumber);
    }

    let sum = 0;
    numbers.forEach(element => {
        sum += element;
    });
    console.log(sum);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
);
