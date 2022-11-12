function solve(array, number) {

    let nums = [];
    for (let index = 0; index < array.length; index++) {
        let currentNum = array[index];

        for (let i = index + 1; i < array.length; i++) {
            if (currentNum + array[i] == number) {

                nums.push(currentNum);
                nums.push(array[i]);

            }

        }

    }
    for (let index = 0; index < nums.length - 1; index += 2) {
        console.log(`${nums[index]} ${nums[index + 1]}`);
    }

}
solve([14, 20, 60, 13, 7, 19, 8],
    27
);