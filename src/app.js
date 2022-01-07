const yargs = require("yargs");
const fs = require("fs");
const {
  addMovie,
  findMovie,
  delMovies,
  changeMovie,
  changeActor,
} = require("./utils/index");

const connection = require("./db/connection");
const { title } = require("process");

const command = process.argv[2];
const app = async (args) => {
  // try {
  // let movieArray;
  //     try {
  //         movieArray = JSON.parse(fs.readFileSync('../storage.json'))   //parse = opposite of stringify
  //     } catch (error) {
  //         movieArray = [];
  //     }
  // console.log(args.add)
  try {
    if (command === "add") {
      const movieObj = { Title: args.title, Actor: args.actor };
      await connection(addMovie, movieObj);

      // addMovie(movieArray, {Title: yargs.argv.title, Actor: yargs.argv.actor});
      // } else if (process.argv[2] === 'list'){
      //     console.log(movieArray);
    } else if (command === "del") {
      const movieObj = { Title: process.argv[3] };
      await connection(delMovies, movieObj);
      console.log(`${movieObj.Title} has been removed`);
    } else if (command === "find") {
      const movieObj = { Title: process.argv[3] };
      await connection(findMovie, movieObj);
    } else if (command === "updateTitle") {
      const movieObj = { Title: process.argv[3], Actor: process.argv[4] };
      const newMovie = { Title: process.argv[5], Actor: movieObj.Actor };
      await connection(changeMovie, movieObj);
      console.log(`${movieObj.Title} has been replaced with ${newMovie.Title}`);
    } else if (command === "updateActor") {
      const movieObj = { Title: process.argv[4], Actor: process.argv[3] };
      const newActor = { Title: movieObj.Title, Actor: process.argv[5] };
      await connection(changeActor, movieObj);
      console.log(`${movieObj.Actor} has been replaced with ${newActor.Actor}`);
    } else {
      console.log("Sorry, I did not recognise that command. Please try again.");
    }
  } catch (error) {
    console.log(error);
  }
  // } catch (error) {
  //     console.log(error);
  // }
};

app(yargs.argv);
