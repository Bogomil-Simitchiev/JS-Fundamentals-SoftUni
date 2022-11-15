function charInRange(first, second) {

    let firstTransform = first.charCodeAt();
    let secondTransform = second.charCodeAt();

    let min = Math.min(firstTransform, secondTransform);
    let max = Math.max(firstTransform, secondTransform);

    let arr = [];

    for (let index = min + 1; index < max; index++) {

        arr.push(String.fromCharCode(index));
    }

    console.log(arr.join(' '));

}
charInRange('a', 'd');
charInRange('#', ':');