function Calculate(number, operator, secondNumber) {

    switch (operator) {
        case '+':
            console.log(Number(number+secondNumber).toFixed(2));
            break;

        case '-':
            console.log(Number(number-secondNumber).toFixed(2));

            break;
        case '*':
            console.log(Number(number*secondNumber).toFixed(2));

            break;
        case '/':
            console.log(Number(number/secondNumber).toFixed(2));

            break;
    }

}

Calculate(5,
    '+',
    10
)