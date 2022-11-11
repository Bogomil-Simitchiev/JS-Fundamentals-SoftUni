function solve(array) {

    for (let i = 0; i < array.length / 2; i++) {

        let first = array[i];
        let last = array[array.length - 1 - i];
        let tmp = first;
        array[i] = last;
        array[array.length - 1 - i] = tmp;


    }
    let line = '';
    for (let index = 0; index < array.length; index++) {
        line += array[index] + " ";

    }
    console.log(line);
}
solve(['a', 'b', 'c', 'd', 'e'])