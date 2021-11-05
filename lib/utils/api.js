const request = require('superagent');


const getPopularMovies =  async () => {
  const response =  await request.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`).set({ accept: 'application/json' });

  return response.body.results.map(movie => movieMunge(movie));
};

const moviesByID = async (id) => {
  const response = await request.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`);

  return idMunge(response.body);

};

const movieMunge = (movie) => {
  const shapedMovie = {
    id: movie.id,
    original_title: movie.original_title,
    overview: movie.overview,
    release_date: movie.release_date,
    original_language: movie.original_language
  };
  return shapedMovie;
};

const idMunge = (movie) => {
  const movieId = {
    id: movie.id,
    homepage: movie.homepage,
    original_title: movie.original_title,
    overview: movie.overview,
    release_date: movie.release_date,
    original_language: movie.original_language
  };
  return movieId;
};

module.exports = { getPopularMovies, moviesByID };
