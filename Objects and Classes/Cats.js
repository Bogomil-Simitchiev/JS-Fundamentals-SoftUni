function solve(array) {

    let cats = [];
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        Meow() {
            return 'Meow';
        }
    }
    for (let index = 0; index < array.length; index++) {
        let str = array[index].split(' ');
        let currentCat = new Cat(str[0], str[1]);
        cats.push(currentCat);

    }
    for (let cat of cats) {
        console.log(`${cat.name}, age ${cat.age} says ${cat.Meow()}`)
    }

}
solve(['Mellow 2', 'Tom 5']);