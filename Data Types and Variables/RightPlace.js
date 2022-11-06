function Solve(word, char, finalWord) {

    let result = word.replace('_', char);
    let final = result == finalWord ? 'Matched' : 'Not Matched';
    console.log(final);
}

Solve('Str_ng', 'i', 'String')