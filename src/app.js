const yargs = require("yargs")
const fs = require("fs")
const { addMovie, listMovies, delMovies } = require("./utils/index")

const app = () => {
    try {
        let movieArray;
            try {
                movieArray = JSON.parse(fs.readFileSync('../storage.json'))   //parse = opposite of stringify
            } catch (error) {
                movieArray = [];
            }
            try {
                if (process.argv[2] === 'add'){
                    addMovie(movieArray, {Title: yargs.argv.title, Actor: yargs.argv.actor});
                } else if (process.argv[2] === 'list'){
                    listMovies(movieArray);
                } 
                // else if (process.argv[2] === 'del'){
                //     delMovies(movieArray, process.argv[3])
                // }
            } catch (error) {
                console.log(error);
            }
    } catch (error) {
        console.log(error);
    }
};

app();