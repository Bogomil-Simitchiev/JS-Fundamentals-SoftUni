function solve(input) {

    let employees = [];
    class Employee {
        constructor(name, personalNumber) {
            this.name = name
            this.personalNumber = personalNumber
        }
    }

    for (let index = 0; index < input.length; index++) {
        let number = input[index].length;
        let employee = new Employee(input[index], number);
        employees.push(employee);

    }
    for (let employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }


}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);