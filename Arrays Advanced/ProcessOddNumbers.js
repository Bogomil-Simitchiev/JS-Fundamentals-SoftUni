function solve(input) {

    let nums = [];
    for (let index = 0; index < input.length; index++) {
        if (index % 2 !== 0) {
            nums.push(input[index] * 2);
        }

    }
    console.log(nums.reverse().join(' '));
}
solve([10, 15, 20, 25]);