function extract(input) {

    let pattern = /(^|\s)[A-Za-z0-9]+[\-\.\_\w]*[A-Za-z]+@[A-Za-z]+[\-]*[A-Za-z]+\.[A-Za-z]+(\.[A-Za-z]+)*\b/g;
    let matches = input.matchAll(pattern);
    for (let match of matches) {
        console.log(match[0]);
    }

}
extract('Please contact us at: support@github.com.');