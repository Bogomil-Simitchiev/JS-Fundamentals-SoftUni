function splitter(input) {

    let words = [];

    for (let index = 0; index < input.length; index++) {

        if (input.charCodeAt(index) >= 65 && input.charCodeAt(index) <= 90) {
            let word = "";
            word += input[index];
            let currentIndex = index + 1;
            while (true) {
                if (input.charCodeAt(currentIndex) >= 97 && input.charCodeAt(currentIndex) <= 122) {
                    word += input[currentIndex];
                } else {
                    break;
                }
                currentIndex++;
            }
            words.push(word);
        }

    }
    console.log(words.join(', '));

    //97-122 

}
splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');