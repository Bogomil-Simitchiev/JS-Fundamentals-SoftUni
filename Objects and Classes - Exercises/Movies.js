function solve(input) {
    let listOfMovies = [];
    for (let info of input) {
        if (info.includes('addMovie')) {
            let nameOfMovie = info.split('addMovie ')[1];

            listOfMovies.push({ name: nameOfMovie });
        } else if (info.includes('directedBy')) {
            let infoOfInfo = info.split(' directedBy ');
            let name = infoOfInfo[0];
            let director = infoOfInfo[1];
            let movie = listOfMovies.find((movieobj) => movieobj.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (info.includes('onDate')) {
            let split = info.split(' onDate ');
            let name = split[0];
            let date = split[1];
            let movie = listOfMovies.find((movieobj) => movieobj.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }
    for (let movie of listOfMovies) {
        if (movie.name&& movie.director&&movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);