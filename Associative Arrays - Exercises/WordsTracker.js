function tracker(input) {

    let occurrences = {};

    let words = input.shift().split(' ');

    for (let word of words) {

        let countForCurrentWord = 0;
        occurrences[word] = countForCurrentWord;

        for (let wordInArr of input) {
            if (word == wordInArr) {
                occurrences[word] += 1;
            }
        }


    }
    let sorted = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}
tracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);