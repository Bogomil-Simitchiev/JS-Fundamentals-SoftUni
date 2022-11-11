function solve(firstArr,secondArr){

    let areEqual = true;
    let sum = 0;
    for (let index = 0; index < firstArr.length; index++) {

        if (firstArr[index]===secondArr[index]) {

            let number = Number(firstArr[index]);
             sum+=number;
        }else{
            areEqual=false;
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            break;
        }
        
    }
    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }

}
solve(['1','2','3','4','5'], ['1','2','4','4','5']);