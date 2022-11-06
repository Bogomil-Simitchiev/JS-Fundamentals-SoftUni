function Echo(par) {

    let type = typeof (par);

    switch (type) {
        case 'string':
        case 'number':
            console.log(type);
            console.log(par);
            break;

        default:
            console.log(`object`);
            console.log(`Parameter is not suitable for printing`);
            break;
    }
}

Echo('Hello, JavaScript!');
Echo(null);
