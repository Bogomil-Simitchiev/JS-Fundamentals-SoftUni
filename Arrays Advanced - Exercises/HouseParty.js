function houseParty(array) {

    let guests = [];
    for (let info of array) {

        let split = info.split(' ');
        if (split.length == 3) {
            let guest = split[0];
            if (!guests.includes(guest)) {
                guests.push(guest);
            } else {
                console.log(`${guest} is already in the list!`);
            }
        } else {
            let guest = split[0];
            if (guests.includes(guest)) {
                let indexOfGuest = guests.indexOf(guest);
                guests.splice(indexOfGuest, 1);
            } else {
                console.log(`${guest} is not in the list!`);
            }

        }

    }
    guests.forEach(element => {
        console.log(element);
    });

}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);