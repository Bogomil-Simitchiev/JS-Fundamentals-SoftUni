function palindromeIntegers(integers) {

    for (let num of integers) {
        num = num.toString();

        let reversedNum = '';
        for (let index = num.length - 1; index >= 0; index--) {
            reversedNum += num[index];

        }

        if (num === reversedNum) {
            console.log('true');
        } else {
            console.log('false');
        }
    }


}
palindromeIntegers([123, 323, 421, 121]);