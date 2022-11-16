function perfectNum(num){
    let sum = 0;
    let final = num;

    for (let index = 1; index <= num/2; index++) {
        
        if (num%index==0) {
            sum+=index;
        }
    }

    if (sum==final) {
        console.log('We have a perfect number!');
    }
    else{
        console.log(`It's not so perfect.`);
    }
}
perfectNum(28);