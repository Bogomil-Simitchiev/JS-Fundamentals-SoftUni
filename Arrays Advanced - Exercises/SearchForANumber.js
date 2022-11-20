function searchForANumber(firstArr, secondArr) {
    let numOfElToTake = secondArr[0];
    let numOfElToDel = secondArr[1];
    let numToSearch = secondArr[2];

    let ourArr = firstArr.slice(0,numOfElToTake);

    ourArr.splice(0,numOfElToDel);

    function occurences(array,number){
        let count = 0;
        for (let element of array) {
            if (element==number) {
                count++;
            }
        }
        return count;
    }
    let occurs = occurences(ourArr,numToSearch);

    console.log(`Number ${numToSearch} occurs ${occurs} times.`)
}
searchForANumber([5, 2, 3, 4, 1, 6],[5, 2, 3]);