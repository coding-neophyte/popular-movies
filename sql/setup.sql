DROP TABLE IF EXISTS movies;

CREATE TABLE movies(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    homepage VARCHAR(512) NOT NULL,
    original_title VARCHAR (512) NOT NULL,
    overview VARCHAR NOT NULL,
    release_date VARCHAR(512) NOT NULL,
    original_language VARCHAR NOT NULL

)
