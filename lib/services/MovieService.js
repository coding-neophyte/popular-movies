const Movie = require('../models/Movie');


module.exports = class MovieService {
  static async getAll(){
    const getAllMovies = await Movie.getAll();
    return getAllMovies;
  }

  static async getMovieByID(id){
    const getByID = await Movie.getByID(id);
    return getByID;
  }

//  static async addMovie()
};
