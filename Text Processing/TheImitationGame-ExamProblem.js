function solve(input) {
    let encrypted = input.shift();

    let replaceStrInText = (text, somethingToChange, replace) => {
        while (text.includes(somethingToChange)) {
            text = text.replace(somethingToChange, replace);
        }
        return text;
    }
    let removeFirstN = (text, n) => {
        let finalResult = "";
        for (let index = n; index < text.length; index++) {

            finalResult += text[index];
        }
        return finalResult;

    }
    let insertAtGivenIndex = (text, index, value) => {
        text = text.slice(0, index) + value + text.slice(index);
        return text;
    }

    for (let index = 0; index < input.length - 1; index++) {
        let info = input[index].split("|");
        let action = info[0];

        if (action == "ChangeAll") {

            let sub = info[1];
            let replacement = info[2];

            encrypted = replaceStrInText(encrypted, sub, replacement);

        } else if (action == "Insert") {

            let index = Number(info[1]);
            let value = info[2];
            encrypted = insertAtGivenIndex(encrypted, index, value);

        } else if (action == "Move") {

            let n = Number(info[1]);

            let smt = encrypted.slice(0, n);
            encrypted += smt;
            encrypted = removeFirstN(encrypted, n);


        }

    }

    console.log(`The decrypted message is: ${encrypted}`);

}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);