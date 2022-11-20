function sorting(array) {
    array.sort((a, b) => a - b);
    let sortArr = [];
    let indexForLast = array.length - 1;
    let indexForFirst = 0;

    for (let index = 0; index < array.length; index++) {
        if (index % 2 == 0) {
            sortArr.push(array[indexForLast]);
            indexForLast--;

        } else {

            sortArr.push(array[indexForFirst]);
            indexForFirst++;
        }

    }
    console.log(sortArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
