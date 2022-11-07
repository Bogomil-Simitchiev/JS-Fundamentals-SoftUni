function Sum(number) {

    number = Number(number);

    let sum = 0;

    while (Math.floor(number) > 0) {

        let digit = Math.floor(number % 10);
        sum += digit;
        number /= 10;

    }
    console.log(sum);

}
Sum(245678)