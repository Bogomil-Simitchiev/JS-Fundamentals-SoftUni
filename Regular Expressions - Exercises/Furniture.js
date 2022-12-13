function solve(input) {


    let text = input.shift();
    let totalSum = 0;
    let furnitures = [];
    while (text !== 'Purchase') {

        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(.\d+)?)!(?<quant>\d+)/g;
        let match = pattern.exec(text);
        if (match !== null) {
            furnitures.push(match.groups['name']);
            totalSum += Number(match.groups['quant']) * Number(match.groups['price']);
        }

        text = input.shift();
    }
    console.log("Bought furniture:");
    furnitures.forEach(el => console.log(el));
    console.log("Total money spend: " + totalSum.toFixed(2));



}
solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);