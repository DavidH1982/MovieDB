const yargs = require("yargs");
const fs = require("fs");
const {
  addMovie,
  findMovie,
  findActor,
  delMovies,
  changeMovie,
  changeActor,
} = require("./utils/index");

const connection = require("./db/connection");
const { title } = require("process");

const command = yargs.argv._[0];

const app = async (args) => {
  try {
    if (command === "add") {
      const movie = await addMovie({title: args.title, actor: args.actor});
    } else if (command === "find") {
      const movie = await findMovie({title: process.argv[3]});
    } else if (command === "findActor") {
      const actor = await findActor({actor: process.argv[3]});
    }
    else if (command === "updateTitle") {
      const movie = await changeMovie({title: process.argv[3], newTitle: process.argv[4]});
    } else if (command === "updateActor") {
      const movie = await changeActor({actor: process.argv[3], newActor: process.argv[4]});
    } else if (command === "del") {
      const movie = await delMovies({ title: process.argv[3] });
    } else {
      console.log("Sorry, I did not recognise that command. Please use 'add', 'del', 'find', 'updateTitle', or 'updateActor'.");
    }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
