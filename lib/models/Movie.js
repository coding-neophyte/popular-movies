const pool = require('../utils/pool');


module.exports = class Movie {
  id;
  homepage;
  original_title;
  overview;
  release_date;
  original_language;

  constructor(row)  {

    this.id = row.id;
    this.homepage = row.homepage;
    this.original_title = row.original_title;
    this.overview = row.overview;
    this.release_date = row.release_date;
    this.original_language = row.original_language;
  }
  static async getPopularMovies(){
    const { rows } = await pool.query(
      'SELECT * FROM movies'
    );
    return rows.map(row => new Movie(row));
  }

  static async getByID(id){
    const { rows } = await pool.query(
      `SELECT
      homepage,
      original_title,
      overview,
      release_date,
      original_language
      FROM movies
      WHERE id = $1`, [id]
    );
    return new Movie(rows[0]);
  }







};
