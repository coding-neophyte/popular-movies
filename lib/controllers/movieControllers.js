const { Router } = require('express');
const  { getPopularMovies, moviesByID }  = require('../utils/api');


module.exports = Router()

  .get('/', async (req, res, next) => {
    try{
      const allMovies = await getPopularMovies();

      res.send(allMovies);
    } catch(err){
      next(err);
    }

  })


  .get('/:id', async (req, res, next) => {
    try {
      const movieID = await moviesByID(req.params.id);

      res.send(movieID);
    } catch(err){
      next(err);
    }
  });
