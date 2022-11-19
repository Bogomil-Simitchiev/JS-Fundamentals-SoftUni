function solve(array) {
    let final = array.sort();
    for (let index = 0; index < array.length; index++) {
        console.log(`${index + 1}.${final[index]}`);

    }
}
solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);