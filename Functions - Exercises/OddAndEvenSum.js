function oddAndEvenSum(number) {

    let odd = 0;
    let even = 0;

    while (Math.floor(number) > 0) {

        let digit = Math.floor(number % 10);

        if (digit % 2 === 0) {
            even += digit;
        }

        else {

            odd += digit;
        }
        number /= 10;

    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddAndEvenSum(1000435);