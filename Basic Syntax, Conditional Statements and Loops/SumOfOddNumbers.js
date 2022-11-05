function SumOfOddNumbers(n){

    let sum = 0;
    let count = 1;
    for (let index = 1; index <= n; index++) {
        
        console.log(count);
        sum+=count;
        count+=2;
    }
    console.log(`Sum: ${sum}`);
}

SumOfOddNumbers(5);