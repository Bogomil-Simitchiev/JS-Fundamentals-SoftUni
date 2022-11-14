function simpleCalculator(numOne, numTwo, operator) {

    //'multiply', 'divide', 'add' or 'subtract'

    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;
    let add = (x, y) => x + y;
    let subtract = (x, y) => x - y;

    switch (operator) {
        case 'multiply':
            console.log(multiply(numOne, numTwo));
            break;
        case 'divide':
            console.log(divide(numOne, numTwo));

            break;
        case 'add':
            console.log(add(numOne, numTwo));

            break;
        case 'subtract':
            console.log(subtract(numOne, numTwo));

            break;

    }

}
simpleCalculator(5, 5, 'multiply');