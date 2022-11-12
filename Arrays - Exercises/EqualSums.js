function solve(array) {

    if (array.length==1) {
        console.log(0);
        return;
    }


    let leftSum = 0;
    let text = 'no';
    for (let i = 0; i < array.length; i++) {
        leftSum += array[i];
        let rightSum = 0;
        for (let index = array.length-1; index > i + 1; index--) {

            rightSum += Number(array[index]);
        }

        if (rightSum == leftSum) {

            text = String(i + 1);
            break;
        }
        

    }
    console.log(text);

}
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])