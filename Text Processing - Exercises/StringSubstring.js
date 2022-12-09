function subs(word, text) {

    let currentText = text.split(' ').join(' ').toLowerCase();
    let currentWord = word.toLowerCase();

    let splitText = currentText.split(' ');
    let isThere = false;
    for (let index = 0; index < splitText.length; index++) {
        let wordToCompare = splitText[index];
        if (wordToCompare == currentWord) {
            console.log(word);
            isThere = true;
            break;
        }
    }
    if (isThere == false) {
        console.log(`${word} not found!`);
    }

}
subs('python', 'JavaScript is the best programming language');