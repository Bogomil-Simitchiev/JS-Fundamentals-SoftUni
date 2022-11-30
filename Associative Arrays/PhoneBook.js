function phoneBook(input) {

    let assocArr = {};
    for (let el of input) {
        let split = el.split(' ');
        let name = split[0];
        let phoneNumber = split[1];
        if (assocArr.hasOwnProperty(name)) {
            assocArr[name] = phoneNumber;
        }
        else{
            assocArr[name] = phoneNumber;
        }

    }
    for (let key in assocArr) {
        console.log(key+" -> "+assocArr[key]);
    }

}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);