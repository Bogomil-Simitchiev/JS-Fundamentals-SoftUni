function Solve(numberOfPeople, typeOfGroup, dayOfTheWeek) {

    let price = 0;

    switch (typeOfGroup) {
        case 'Students':
            if (dayOfTheWeek == "Friday") {
                price = numberOfPeople * 8.45;
            }
            else if (dayOfTheWeek == "Saturday") {
                price = numberOfPeople * 9.80;
            }
            else if (dayOfTheWeek == "Sunday") {
                price = numberOfPeople * 10.46;
            }

            if (numberOfPeople >= 30) {

                price = price - (price * 0.15);
            }

            break;
        case 'Business':

            if (numberOfPeople >= 100) {
                numberOfPeople -= 10;
            }

            if (dayOfTheWeek == "Friday") {
                price = numberOfPeople * 10.90;
            }
            else if (dayOfTheWeek == "Saturday") {
                price = numberOfPeople * 15.60;
            }
            else if (dayOfTheWeek == "Sunday") {
                price = numberOfPeople * 16;
            }

            break;


        case 'Regular':
            

            if (dayOfTheWeek == "Friday") {
                price = numberOfPeople * 15;
            }
            else if (dayOfTheWeek == "Saturday") {
                price = numberOfPeople * 20;
            }
            else if (dayOfTheWeek == "Sunday") {
                price = numberOfPeople * 22.50;
            }
            if (numberOfPeople>=10&&numberOfPeople<=20) {
            
                price = price-(price*0.05);
            }

            break;

    }

    console.log(`Total price: ${price.toFixed(2)}`);


}

Solve(40,
    "Regular",
    "Saturday"
    );