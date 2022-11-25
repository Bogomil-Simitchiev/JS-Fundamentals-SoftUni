function solve(input) {

    let heroes = [];

    for (let index = 0; index < input.length; index++) {

        let tokens = input[index].split(' / ')
        let nameOfHeroe = tokens[0];
        let level = Number(tokens[1]);
        let arrayOfItems = tokens[2].split(', ').join(', ');

        let currentHero = {
            nameOfHeroe,
            level,
            arrayOfItems


        }
        heroes.push(currentHero);


    }
    heroes.sort((a, b) => a.level - b.level);
    for (const hero of heroes) {
        console.log("Hero: "+hero.nameOfHeroe);
        console.log("level => "+hero.level);
        console.log("items => "+hero.arrayOfItems);
    }

}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);