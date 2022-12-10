function cutAndReverse(input) {
    let reversedTexts = [];
    for (let index = input.length - 1; index >= 0; index--) {
        reversedTexts.push(input[index]);
    }
    let firstHalf = reversedTexts.slice(0, reversedTexts.length / 2).join('');
    let secondHalf = reversedTexts.slice(reversedTexts.length / 2, reversedTexts.length).join('');
    console.log(secondHalf);
    console.log(firstHalf);


}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');