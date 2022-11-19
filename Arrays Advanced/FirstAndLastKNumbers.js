function solve(input) {

    let k = input[0];
    let arrFirst = input.slice(1,k+1);
    let arrSecond = input.slice(-k);
    console.log(arrFirst.join(' ')); 
    console.log(arrSecond.join(' ')); 

}
solve([3,6, 7, 8, 9]);
solve([2, 7, 8, 9]);