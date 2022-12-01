function schoolGrades(input) {
    let map = new Map();

    for (let element of input) {
        let splitInfo = element.split(' ');
        let nameOfStudent = splitInfo.shift();

        if (!map.has(nameOfStudent)) {

            map.set(nameOfStudent, []);

        }
        for (let grade of splitInfo) {
            map.get(nameOfStudent).push(grade);
        }

    }
    let sorted = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sorted) {
        console.log(key + ": " + averageGrade(value));
    }

    function averageGrade(arr) {
        let average = 0;
        for (let grade of arr) {
            average += Number(grade);
        }
        average /= arr.length;
        return average.toFixed(2);
    }

}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);