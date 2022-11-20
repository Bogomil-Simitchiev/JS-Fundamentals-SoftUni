function solve(arr) {

    let nums = arr[0].split(' ').map(Number);
    let currentNum = Number(arr[1]);

    for (let index = 2; index < arr.length; index++) {

        let commands = arr[index].split(' ');
        if (commands.length == 2) {
            nums.push(Number(commands[1]));

        } else {
            let number = Number(commands[0]);
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] + number <= currentNum) {
                    nums[i] += number;
                    break;
                }
            }
        }

    }
    console.log(nums.join(' '));

}
solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);