function solve(num) {

    let result = num;
    let sum = 0;
    while (Math.floor(num) > 0) {

        let digit = Math.floor(num % 10);
        sum += digit;
        num /= 10;
    }

    let hasNine = false;
    

    while (Math.floor(sum) > 0) {

        let digit = Math.floor(sum % 10);
        if (digit === 9) {
            hasNine = true;
        }
        sum /= 10;
    }

    if (hasNine) {

        console.log(`${result} Amazing? True`);

    } else {

        console.log(`${result} Amazing? False`);

    }

}
solve(583472);