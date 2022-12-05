function countOcc(text, word) {
    let count = 0;
    for (let wordCurrent of text.split(' ')) {
        if (word == wordCurrent) {
            count++;
        }
    }
    console.log(count);
}
countOcc('This is a word and it also is a sentence', 'is');