function login(input) {

    let newString = "";
    for (var i = input[0].length - 1; i >= 0; i--) {
        newString += input[0][i];
    }


    let index = 1;
    let count = 0;
    while (true) {

        let currentPassword = input[index];
        
        if (currentPassword == newString) {
            console.log(`User ${input[0]} logged in.`);
            break;
        }

        count++;
        if (count == 4) {
            console.log(`User ${input[0]} blocked!`);
            break;
        }

        
        if (currentPassword != newString) {

            console.log(`Incorrect password. Try again.`);
            index++;
        }
        
       
        
    }

}

login(['Acer','login','go','let me in','recA']);