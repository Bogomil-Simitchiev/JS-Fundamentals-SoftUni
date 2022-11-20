function solve(array) {


    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        for (let i = index + 1; i < array.length; i++) {
            let el = array[i];
            if (element == el) {
                array.splice(i, 1);
                i = i - 1;
            }
        }
    }

    console.log(array.join(' '));
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solve([1, 2, 3, 4]);