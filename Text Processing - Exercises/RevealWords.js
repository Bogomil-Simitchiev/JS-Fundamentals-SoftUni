function reveal(firstParameters, secondParameters) {

    let words = firstParameters.split(', ');
    let example = secondParameters.split(' ');

    for (let word of words) {

        for (let currentWord of example) {
            if (word.length == currentWord.length) {

                let isCorrect = checkFullWord(currentWord);
                if (isCorrect) {
                    let indexOfWord = example.indexOf(currentWord);
                    example.splice(indexOfWord, 0, word);
                    example.splice(indexOfWord + 1, 1);
                }
            }
        }
    }

    console.log(example.join(' '));
    function checkFullWord(word) {

        let isTrue = true;
        for (let index = 0; index < word.length; index++) {
            if (word[index] !== '*') {
                isTrue = false;
                break;
            }

        }
        return isTrue;

    }

}
reveal('great, learning', 'softuni is ***** place for ******** new programming languages');
