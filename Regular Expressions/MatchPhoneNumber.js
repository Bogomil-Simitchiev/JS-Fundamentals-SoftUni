function matchPhoneNumber(input) {
    let pattern = /\+359( |-)[2]\1[\d]{3}\1[\d]{4}\b/g;
    let text = input[0];
    let matches = text.matchAll(pattern);

    let valid = [];
    for (const match of matches) {
        valid.push(match[0]);
    }
    console.log(valid.join(", "));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);