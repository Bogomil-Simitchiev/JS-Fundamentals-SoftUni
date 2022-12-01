function occurrences(words) {
    let map = new Map();
    for (let word of words) {
        if (!map.has(word)) {
            map.set(word, 1);
        }
        else {
            let lastCount = map.get(word);
            map.set(word, lastCount + 1);
        }
    }

    let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    for (let [key,value] of sorted) {
        console.log(key+" -> "+value+" times");
    }


}
occurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);