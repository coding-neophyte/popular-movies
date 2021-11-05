const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');
// const controller = require('../lib/controllers/movieControllers');

describe('popular-movies routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should return all movies', async () => {
    const res = await request(app).get('/api/v1/movies');

    expect(res.body[0]).toEqual({ id: expect.any(Number), original_title: expect.any(String), overview: expect.any(String), release_date: expect.any(String), original_language: expect.any(String) });
  });

  it('should return one movie with given id', async () => {
    const res = await request(app).get('/api/v1/movies/550');

    expect(res.body).toEqual({ id: expect.any(Number), homepage: expect.any(String), original_title: expect.any(String), overview: expect.any(String), release_date: expect.any(String), original_language: expect.any(String) });
  });

});
