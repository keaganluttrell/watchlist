DROP DATABASE IF EXISTS watchlist;

CREATE DATABASE watchlist;

USE watchlist;

DROP TABLE IF EXISTS movie_list;

CREATE TABLE movie_list (
    adult BOOLEAN,
    backdrop_path VARCHAR(60),
    id INT(11) UNIQUE,
    original_language VARCHAR(20),
    original_title VARCHAR(60),
    overview TEXT,
    popularity FLOAT,
    poster_path VARCHAR(60),
    release_date VARCHAR(40),
    title VARCHAR(60),
    video BOOLEAN,
    vote_average FLOAT,
    vote_count INT(11),
    saved BOOLEAN
)