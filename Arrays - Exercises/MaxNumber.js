function Max(array) {

    let biggerNums = [];


    for (let index = 0; index < array.length; index++) {

        let bigger = true;
        let currentNum = array[index];

        for (let i = index + 1; i < array.length; i++) {

            if (currentNum <= array[i]) {
                bigger = false;
                break;
            }
        }
        if (bigger) {
            biggerNums.push(currentNum);
        }

    }
    console.log(biggerNums.join(" "));

}
Max([1, 4, 3, 2]);