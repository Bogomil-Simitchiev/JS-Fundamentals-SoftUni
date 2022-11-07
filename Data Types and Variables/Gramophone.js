function solve(nameOfBand, nameOfAlbum, songName) {

    let result = (nameOfAlbum.length * nameOfBand.length) * songName.length / 2;
    console.log(`The plate was rotated ${Math.ceil(result / 2.5)} times.`)

}
solve('Black Sabbath', 'Paranoid', 'War Pigs')