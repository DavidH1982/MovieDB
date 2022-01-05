const fs = require("fs");

const addMovie = (movieArray, movieObj) => {
    try {
        movieArray.push(movieObj);
        const stringyObj = JSON.stringify(movieArray);
        fs.writeFileSync('../storage.json', stringyObj, null, 2);
    } catch (error) {
        console.log(error);        
    }
}

const listMovies = () => {
    try {
        console.log(JSON.parse(fs.readFileSync('../storage.json')));
    } catch (error) {
        console.log(error)
    }
}

// const delMovies = (movieArray, index) => {
//     try {
//         JSON.parse(fs.readFileSync('../storage.json'));
//         movieArray.splice(index, 1);
//     } catch (error) {
//         console.log(error);
//     }
// }

module.exports = {
    addMovie,
    listMovies,
    // delMovies,
}