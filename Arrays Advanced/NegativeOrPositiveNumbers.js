function solve(array) {

    let nums = [];
    for (let el of array) {

        if (Number(el) < 0) {
            nums.unshift(el);
        }
        else {

            nums.push(Number(el));
        }
    }
    for (let el of nums) {
        console.log(el);
    }
}
solve(['7', '-2', '8', '9']);