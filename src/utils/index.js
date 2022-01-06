const fs = require("fs");


const addMovie = (movieArray, movieObj) => {
    try {
        movieArray.push(movieObj);
        const stringyObj = JSON.stringify(movieArray);
        fs.writeFileSync('../storage.json', stringyObj);
    } catch (error) {
        console.log(error);        
    }
}

const delMovies = (movieArray, movieObj) => {
    try {
        movieArray.splice(movieObj, 1);
        const stringyObj = JSON.stringify(movieArray);
        fs.writeFileSync('../storage.json', stringyObj);
    } catch (error) {
        console.log(error);
    }
}

const changeMovie = (movieArray, index, newMovie) => {
    try {
        movieArray.splice(index, 1, newMovie)
        const stringyObj = JSON.stringify(movieArray);
        fs.writeFileSync('../storage.json', stringyObj);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addMovie,
    delMovies,
    changeMovie,
}