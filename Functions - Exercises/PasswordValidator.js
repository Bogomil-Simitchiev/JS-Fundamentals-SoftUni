function passwordValidation(passwordInput) {

    let isLengthRight = passwordInput.length >= 6 && passwordInput.length <= 10 ? true : false;

    function isLettersAndDigitsOnly(password) {

        let isRight = false;

        for (let character of password) {
            let current = character.charCodeAt(0);
            if ((current >= 65 && current <= 90) || (current >= 97 && current <= 122) || (current >= 48 && current <= 57)) {
                isRight = true;
            }
            else {
                isRight = false;
                break;
            }
        }
        return isRight;

    }
    function hasItTwoDigits(password) {

        let count = 0;
        for (let char of password) {
            let current = char.charCodeAt(0);
            if (current >= 48 && current <= 57) {
                count++;
            }
        }
        let isTrue = count >= 2 ? true : false;

        return isTrue;
    }

    if (isLengthRight == true && isLettersAndDigitsOnly(passwordInput) == true && hasItTwoDigits(passwordInput) == true) {
        console.log('Password is valid');
    }
    if (!isLengthRight) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isLettersAndDigitsOnly(passwordInput)) {
        console.log('Password must consist only of letters and digits');
    }
    if (!hasItTwoDigits(passwordInput)) {
        console.log('Password must have at least 2 digits');
    }


}
passwordValidation('Pa$s$s');
