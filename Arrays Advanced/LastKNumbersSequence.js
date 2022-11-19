function solve(n, k) {

    let nums = [];
    nums.push(1);
    let count = n;
    while (n > 0) {

        let part = nums.slice(-k);

        let sumPrevious = 0;

        for (let el of part) {
            sumPrevious += el;
        }
        nums.push(sumPrevious);
        n--;
    }
    let final = nums.splice(0, count);
    console.log(final.join(' '));
}
solve(6, 3);