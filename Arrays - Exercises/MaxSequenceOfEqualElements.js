function solve(array) {

    let count = 0;
    let currentCount = 0;
    let number = 0;

    for (let index = 0; index < array.length - 1; index++) {

        currentCount++;
        if (array[index] === array[index + 1]) {
            if (currentCount > count) {
                count = currentCount;
                number = Number(array[index]);
            }
        } else {
            currentCount = 0;
        }

    }
    let nums = [];
    for (let i = 0; i <= count; i++) {
        nums.push(number);

    }
    console.log(nums.join(' '))

}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);