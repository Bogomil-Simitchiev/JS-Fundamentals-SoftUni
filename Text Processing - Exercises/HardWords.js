function hardWords(input) {
    let text = input[0].split(' ');
    let arrWithWords = input[1];
    let arr = [];
    for (let word of arrWithWords) {
        let current = '_'.repeat(word.length);
        if (text.includes(current)) {
            let index = text.indexOf(current);
            text.splice(index, 1, word);
        } else if (text.indexOf(current + ',') != -1) {
            let index = text.indexOf(current + ',');
            text.splice(index, 1, word + ',');
        }
        else if (text.indexOf(current + '.') != -1) {
            let index = text.indexOf(current + '.');
            text.splice(index, 1, word + '.');
        }

    }

    console.log(text.join(' '));
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);