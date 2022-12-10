function replaceRepeatingChars(input) {

    let arr = [];
    for (let index = 0; index < input.length - 1; index++) {
        let previous = input[index];
        let next = input[index + 1];
        if (previous !== next) {
            arr.push(previous);
        }
    }
    console.log(arr.join('') + input[input.length - 1]);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');