function solve(array) {
    let numbers = array.shift();
    let split = numbers.split(' ').map(Number);

    for (let index = 0; index < array.length; index++) {

        let parts = array[index].split(' ');
        if (parts.length == 3) {

            let number = Number(parts[1]);
            let index = Number(parts[2]);

            split.splice(index, 0, number);

        } else {

            let command = parts[0];
            if (command == 'Add') {

                let number = Number(parts[1]);
                split.push(number);

            } else if (command == 'Remove') {

                let number = Number(parts[1]);
                while (split.includes(number)) {
                    let indexOfEl = split.indexOf(number);
                    split.splice(indexOfEl,1);
                }

            } else if (command == 'RemoveAt') {

                let index = Number(parts[1]);
                split.splice(index, 1);
                
            }

        }
    }
    console.log(split.join(' '));
}
solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);