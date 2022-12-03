function party(input) {

    let vips = [];
    let guests = [];

    let set = [];

    while (input[0] !== "PARTY") {

        set.push(input.shift());
    }
    input.shift();
    for (let index = 0; index < input.length; index++) {
        let person = input[index];
        if (set.includes(person)) {
            let index = set.indexOf(person);
            set.splice(index, 1);
        }

    }
    for (let person of set) {
        let isNumber = person.charCodeAt(0) >= 48 && person.charCodeAt(0) <= 57 ? true : false;

        if (isNumber) {
            vips.push(person);
        } else {
            guests.push(person);
        }
    }
    let finalCountOfPeopleWhoWillCome = vips.length + guests.length;
    console.log(finalCountOfPeopleWhoWillCome);
    for (let vip of vips) {
        console.log(vip);
    }
    for (let guest of guests) {
        console.log(guest);
    }

}
party(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
);