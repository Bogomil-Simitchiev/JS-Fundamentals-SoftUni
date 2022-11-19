function smallestTwoNumbers(input) {

    let nums = input.sort((a, b) => {
        return a - b;
    });

    console.log(nums[0] + ' ' + nums[1]);
    

}
smallestTwoNumbers([30, 15, 50, 5]);