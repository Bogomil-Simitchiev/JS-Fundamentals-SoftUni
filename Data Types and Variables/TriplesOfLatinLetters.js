function solve(num) {

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {

                let letterFirst = String.fromCharCode(i + 97);
                let letterSecond = String.fromCharCode(j + 97);
                let letterThird = String.fromCharCode(k + 97);


                let line = letterFirst + letterSecond + letterThird;
                console.log(line);

            }

        }

    }

}
solve('3')