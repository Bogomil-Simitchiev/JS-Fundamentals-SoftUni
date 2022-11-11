function solve(array) {

    let sumBefore = 0;
    let sumAfter = 0;

    array.forEach(element => {
        sumBefore += element;
    });

    for (let index = 0; index < array.length; index++) {
        let number = Number(array[index]);
        if (number % 2 === 0) {
            array[index] += index;
            sumAfter += array[index];
        } else {
            array[index] -= index;
            sumAfter += array[index];

        }

    }
    console.log(array);
    console.log(sumBefore);
    console.log(sumAfter);


}
solve([5, 15, 23, 56, 35])