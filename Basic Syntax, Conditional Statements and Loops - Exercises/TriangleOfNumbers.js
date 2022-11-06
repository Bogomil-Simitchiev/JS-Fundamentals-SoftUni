function Solve(n) {

    for (let index = 1; index <= n; index++) {
        let line = '';
        for (let j = 1; j <= index; j++) {
            line += index;
            if (j !== index) {
                line += " ";
            }

        }
        console.log(line);
    }

}

Solve(3);