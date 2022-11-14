function checkSign(numOne, numTwo, numThree) {

    if (numOne < 0 && numTwo > 0 && numThree > 0) {
        console.log(`Negative`);
    }
    else if (numOne > 0 && numTwo < 0 && numThree > 0) {
        console.log(`Negative`);
    }
    else if (numOne > 0 && numTwo > 0 && numThree < 0) {
        console.log(`Negative`);
    }
    else if (numOne < 0 && numTwo < 0 && numThree < 0) {
        console.log(`Negative`);
    }
    else {
        console.log(`Positive`);
    }
}
checkSign(-6, -12, 14);