function meetings(input) {

    let info = {};
    for (let element of input) {
        let split = element.split(' ');
        let weekday = split[0];
        let name = split[1];

        if (!info.hasOwnProperty(weekday)) {
            info[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
        else {
            console.log(`Conflict on ${weekday}!`);
        }

    }
    for (let key in info) {
        console.log(key + " -> " + info[key]);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);