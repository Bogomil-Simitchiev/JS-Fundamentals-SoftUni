function solveProblem(input) {

    let example = input.split(' ');
    let filtered = example.filter(x => x[0] == '#');

    let specialWords = [];
    filtered.forEach(word => {
        let isWordCorrect = checkIfWordIsCorrect(word);
        if (isWordCorrect) {
            let current = word.slice(1, word.length);
            specialWords.push(current);
        }
    });


    specialWords.forEach(element => {
        console.log(element);
    });


    function checkIfWordIsCorrect(word) {
        let isCorrect = true;

        if (word.length == 1) {
            isCorrect = false;
        }
        else {
            for (let index = 1; index < word.length; index++) {
                if (word[index] < 65 || word[index] > 122) {
                    isCorrect = false;
                    break;
                }

            }

        }
        return isCorrect;

    }
}
solveProblem('Nowadays everyone uses # to tag a #special word in #socialMedia');