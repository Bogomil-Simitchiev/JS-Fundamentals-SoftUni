function NxN(number) {
    for (let index = 0; index < number; index++) {
        let line = '';
        for (let i = 0; i < number; i++) {

            line += number+' ';
        }
        console.log(line);

    }
}
NxN(3);