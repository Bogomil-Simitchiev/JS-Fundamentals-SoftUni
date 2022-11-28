function solve(input) {

    class Info {
        constructor(name, definition) {
            this.name = name;
            this.definition = definition;
        }
    }
    let info = [];

    for (let element of input) {

        let hasDouble = false;
        let parsed = JSON.parse(element);
        let currentName = Object.keys(parsed).join();
        let currentDefinition = Object.values(parsed).join();

        info.forEach(el => {
            if (el.name === currentName) {
                el.definition = currentDefinition;
                hasDouble = true;
            }
        });
        if (!hasDouble) {
            let currentInfo = new Info(currentName, currentDefinition);
            info.push(currentInfo);
        }


    }
    info.sort((a, b) => a.name.localeCompare(b.name));

    for (let currentInfo of info) {
        console.log(`Term: ${currentInfo.name} => Definition: ${currentInfo.definition}`);
    }
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);