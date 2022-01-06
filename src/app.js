const yargs = require("yargs")
const fs = require("fs")
const { addMovie, delMovies, changeMovie } = require("./utils/index")

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
                    console.log(movieArray);
                } else if (process.argv[2] === 'del'){
                    delMovies(movieArray, process.argv[3])
                    console.log(`${movieArray[process.argv[3]]} has been removed`)
                    console.log(movieArray)
                } else if (process.argv[2] === 'show'){
                    if (process.argv[3] <= movieArray.length){
                    console.log(movieArray[process.argv[3]-1])
                    } else {
                        console.log("There is not that many items in the list. Please try again")
                    }
                } else if (process.argv[2] === "update"){
                    let newMovie = {Title: process.argv[4], Actor: process.argv[5]}
                    changeMovie(movieArray, process.argv[3], newMovie)
                    console.log(movieArray)
                } else {
                    console.log("Sorry, I did not recognise that command. Please try again.")
                }
            } catch (error) {
                console.log(error);
            }
    } catch (error) {
        console.log(error);
    }
};

app();