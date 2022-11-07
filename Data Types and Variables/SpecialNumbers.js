function Special(n) {

    for (let i = 1; i <= n; i++) {

        let number = i;
        let sumOfDigits = 0;
        while (Math.floor(number) > 0) {

            let digit = Math.floor(number % 10);
            sumOfDigits += digit;
            number /= 10;

        }
        if (sumOfDigits==5||sumOfDigits==7||sumOfDigits==11) {

            console.log(`${i} -> True`);
            
        }else{

            console.log(`${i} -> False`);
        }

    }

}
Special(15);