function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }
    let songs = [];
    let n = input[0];
    for (let index = 1; index <= n; index++) {
        let info = input[index].split('_');
        let type = info[0];
        let name = info[1];
        let time = info[2];
        let song = new Song(type, name, time);
        songs.push(song);

    }
    let lastCommand = input[input.length - 1];
    if (lastCommand == 'all') {
        for (let song of songs) {
            console.log(song.name);
        }
    }
    else {
        for (let song of songs) {
            if (song.typeList == lastCommand) {
                console.log(song.name);
            }
        }
    }

}
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);