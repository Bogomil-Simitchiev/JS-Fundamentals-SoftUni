function sortArray(array) {
    array.sort();

    array.sort((cur, next) => cur.length - next.length);


    array.forEach(element => {
        console.log(element)
    });
}
sortArray(['alpha', 'beta', 'gamma'])