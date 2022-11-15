function solve(first, second, third) {
    let sum = () => first + second;
    let subtract = () => sum() - third;

    console.log(subtract());

}
solve(23, 6, 10);