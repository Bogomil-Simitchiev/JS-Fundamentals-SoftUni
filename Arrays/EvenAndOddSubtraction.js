function solve(array) {

    let sumOfEvenNumbers = 0;
    let sumOfOddNumbers = 0;

    for (let index = 0; index < array.length; index++) {
        let number = Number(array[index]);
        if (number % 2 === 0) {
            sumOfEvenNumbers += number;
        } else {
            sumOfOddNumbers += number;
        }

    }
    console.log(sumOfEvenNumbers-sumOfOddNumbers);

}
solve([1, 2, 3, 4, 5, 6]);