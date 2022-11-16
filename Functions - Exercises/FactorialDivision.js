function factorialDivision(first, second) {


    let fact1 = 1;
    for (let index = 1; index <= first; index++) {
        fact1 *= index;

    }
    let fact2 = 1;
    for (let index = 1; index <= second; index++) {
        fact2 *= index;

    }
    console.log(Number(fact1 / fact2).toFixed(2));
}
factorialDivision(5, 2);