function solve(array) {

    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        let number = Number(array[index]);

        if (number % 2 === 0) {
            sum += number;
        }

    }
    console.log(sum);

}
solve(['1', '2', '3', '4', '5', '6'])