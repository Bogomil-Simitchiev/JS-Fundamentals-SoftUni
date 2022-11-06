function PrintAndSum(start, end) {

    let sum = 0;
    let text="";
    for (let index = start; index <= end; index++) {
        sum += index;
        text += index + " ";
    }

    console.log(text);
    console.log(`Sum: ${sum}`);
}

PrintAndSum(5, 10);