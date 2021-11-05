const request = require('superagent');


const getPopularMovies =  async () => {
  const response =  await request.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`).set({ accept: 'application/json' });

  return response.body.results;
};

const moviesByID = async (id) => {
  const response = await request.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`);

  return response.body;

};

module.exports = { getPopularMovies, moviesByID };
