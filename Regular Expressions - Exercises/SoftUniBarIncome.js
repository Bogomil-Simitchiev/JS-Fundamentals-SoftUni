function solve(input) {
    
    let totalIncome = 0;
    for (let index = 0; index < input.length - 1; index++) {

        let currentText = input[index];
        let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+|[0-9]+\.[0-9]+)\$/g;
        let result = pattern.exec(currentText);
        if (result !== null) {

            let sum = (Number(result.groups.price) * Number(result.groups.count)).toFixed(2);
            totalIncome += Number(sum);
            console.log(`${result.groups.customer}: ${result.groups.product} - ${sum}`);

        }

    }
    console.log("Total income: " + totalIncome.toFixed(2));

}
solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);
