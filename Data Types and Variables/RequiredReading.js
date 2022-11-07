function solve(numberOfPages, pagesReadInOneHour, numberOfDays) {

    let totalHoursForTheBook = numberOfPages / pagesReadInOneHour;
    let result = totalHoursForTheBook / numberOfDays;

    console.log(result);
}
solve(212,
    20 ,
    2 
    )