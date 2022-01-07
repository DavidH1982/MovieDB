const fs = require("fs");

const addMovie = async (collection, movieObj) => {
  try {
    await collection.insertOne(movieObj);
    console.log(`Successfully added ${movieObj.Title}.`);
    // movieArray.push(movieObj);
    // const stringyObj = JSON.stringify(movieArray);
    // fs.writeFileSync('../storage.json', stringyObj);
  } catch (error) {
    console.log(error);
  }
};

const findMovie = async (collection, movieObj) => {
  try {
    const movie = await collection.findOne(movieObj);
    if (movie == null) {
      console.log("There are no results for your search. Make sure spelling and capitalisation is correct");
    } else {
      console.log(movie);
    }
  } catch (error) {
    console.log(error);
  }
};

// const findActor = async (collection, movieObj) => {
//     try {
//         const query = { actor: process.argv[3]}
//         const options = {
//             sort: {Title: 1},
//             projection: { _id: 0, Title: 1, Actor: 0},
//         };
//         const cursor = collection.find(query, options);
//         if ((await cursor.count()) === 0) {
//             console.log("No results found")
//         } else {
//         await cursor.forEach(console.log());
//         }
//     }
//         catch (error) {
//         console.log(error);
//     }
// }

const changeMovie = async (collection, movieObj) => {
  try {
    const newMovie = { Title: process.argv[5], Actor: movieObj.Actor };
    await collection.replaceOne(movieObj, newMovie);
    // movieArray.splice(index, 1, newMovie)
    // const stringyObj = JSON.stringify(movieArray);
    // fs.writeFileSync('../storage.json', stringyObj);
  } catch (error) {
    console.log(error);
  }
};

const changeActor = async (collection, movieObj) => {
  try {
    const newActor = { Actor: process.argv[5], Title: movieObj.Title };

    await collection.replaceOne(movieObj, newActor);
  } catch (error) {
    console.log(error);
  }
};

const delMovies = async (collection, movieObj) => {
  try {
    await collection.deleteOne(movieObj);
    console.log(
      `Successfully removed ${movieObj.Title} from the Movie Database.`
    );
    // movieArray.splice(movieObj, 1);
    // const stringyObj = JSON.stringify(movieArray);
    // fs.writeFileSync('../storage.json', stringyObj);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
  findMovie,
  changeMovie,
  changeActor,
  delMovies,
};
