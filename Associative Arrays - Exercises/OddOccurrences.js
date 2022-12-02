function oddOccurrences(input) {
    let lowers = input.toLowerCase().split(' ');
    let map = new Map();

    for (let word of lowers) {
        if (!map.has(word)) {
            map.set(word, 1);
        }
        else {
            let lastValue = map.get(word);
            map.set(word, lastValue + 1);
        }
    }
    function ReturnOdd(currentMap) {
        let arr = [];
        for (const [key, value] of currentMap) {
            if (value % 2 == 1) {
                arr.push(key);
            }
        }
        return arr.join(' ');
    }

    console.log(ReturnOdd(map));

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');