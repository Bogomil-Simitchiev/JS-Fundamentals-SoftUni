function Rounding(firstNum, secondNum) {

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    if (secondNum > 15) {
        secondNum = 15;
    }
    
    let finalNumber = firstNum.toFixed(secondNum);

    console.log(parseFloat(finalNumber));


}

Rounding(3.1415926535897932384626433832795, 2);