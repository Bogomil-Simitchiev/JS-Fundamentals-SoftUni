function solve(input) {
    let inventory = input[0].split(' ');

    for (let index = 1; index < input.length; index++) {
        let tokens = input[index].split(' ');
        let action = tokens[0];
        switch (action) {
            case 'Buy':
                let equipment = tokens[1];
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                let equipmentToRemove = tokens[1];
                if (inventory.includes(equipmentToRemove)) {
                    let indexOfEquipment = inventory.indexOf(equipmentToRemove);
                    inventory.splice(indexOfEquipment, 1);
                }
                break;

            case 'Repair':
                let equipmentToRepair = tokens[1];
                if (inventory.includes(equipmentToRepair)) {
                    let indexOfEquipment = inventory.indexOf(equipmentToRepair);
                    inventory.splice(indexOfEquipment, 1);
                    inventory.push(equipmentToRepair);
                }
                break;
            case 'Upgrade':
                let equipmentToUpgrade = tokens[1];
                let split = equipmentToUpgrade.split('-');

                if (inventory.includes(split[0])) {
                    let indexOfEquipment = inventory.indexOf(split[0]);
                    inventory.splice(indexOfEquipment+1, 0, `${split[0]}:${split[1]}`);

                }
                break;

        }


    }
    console.log(inventory.join(' '));
}
solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
);