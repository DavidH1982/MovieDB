const fs = require("fs");
const { title } = require("process");
const Movie = require("../models/models");

const addMovie = async (movieObj) => {
  try {
    const newMovie = new Movie(movieObj);
    await newMovie.save();
    console.log("New Movie: ", newMovie)

  } catch (error) {
    console.log(error);
  }
};

const findMovie = async (movieObj) => {
  try {
    const castList = []
    const movie = await Movie.find(movieObj, 'actor');
    if (movie == null) {
      console.log("There are no results for your search. Make sure spelling and capitalisation is correct");
    } else {
      movie.forEach(() => {castList.push(movie.actor)})
      console.log(movieObj.title)
      console.log(castList);
      // console.log(movie)
    }
  } catch (error) {
    console.log(error);
  }
};

const findActor = async (movieObj) => {
  try {
    const filmList = []
    const actor = await Movie.find(movieObj, 'title');
    if (actor == null) {
      console.log("There are no results for your search. Make sure spelling and capitalisation is correct");
    } else {
      // actor.forEach(() => {filmList.push(actor.title)})
      // console.log(movieObj.actor)
      // console.log(filmList);
      console.log(actor)
    }
  } catch (error) {
    console.log(error);
  }
}

const changeMovie = async (movieObj) => {
  try {
    const movie = await Movie.updateOne({title: movieObj.title},{title: movieObj.newTitle});
    if (movie.acknowledged == false) {
      console.log("Update has not occurred. Please try again");
    } else {
      console.log(`${movieObj.title} has been replaced by ${movieObj.newTitle}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const changeActor = async (movieObj) => {
  try {
    const newActor = await Movie.updateOne({actor: movieObj.actor},{actor: movieObj.newActor});
    if (newActor.acknowledged == false) {
      console.log("Update has not occurred. Please try again");
    } else {
      console.log(`${movieObj.actor} has been replaced by ${movieObj.newActor}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const delMovies = async (movieObj) => {
  try {
    const movie = await Movie.deleteOne(movieObj);
    if (movie.deletedCount == 0) {
      console.log("There are no results for your search. Make sure spelling and capitalisation is correct");
    } else {
      console.log(`${movieObj.title} has been removed from Movies Database`)
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
  findMovie,
  findActor,
  changeMovie,
  changeActor,
  delMovies,
};
