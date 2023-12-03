import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Movie} from "./Movie";
import css from './MovieList.module.css'
import {getGenres, getMoviesByGenre, getPopularMovies} from "../api";
import {useParams} from "react-router-dom";
import {useTheme} from "../Theme/useTheme";

const MovieList = () => {

    const {genreId} = useParams();
    const [movies, setMovies] = useState([]);
    const [genreName, setGenreName] = useState();
    const [page, setPage] = useState(1);
    const {isDarkMode} = useTheme();

    useEffect(() => {
        const fetchMovies = async () => {
            let fetchedMovies;
            if (genreId) {
                const genres = await getGenres();
                const selectedGenre = genres.find((genre) => genre.id === parseInt(genreId));
                setGenreName(selectedGenre ? selectedGenre.name : "Unknown Genre");
                fetchedMovies = await getMoviesByGenre(genreId, page);
            } else {
                setGenreName("Popular");
                fetchedMovies = await getPopularMovies(page);
            }
            setMovies(fetchedMovies);
        };

        fetchMovies();
    }, [genreId, page]);
    const handlePrev = () => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleNext = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div>
            <h2 className={css.Title}>{genreId ? `${genreName}` : 'Popular Movies'}</h2>

            <div className={css.MovieList}>
                {movies.map(movie => <Movie movie={movie}/>)}
                <button className={css.Button_Next_Prev} onClick={handlePrev} disabled={page === 1}>
                    Prev
                </button>
                <button className={css.Button_Next_Prev} onClick={handleNext}>Next</button>
            </div>
        </div>

    );
};

export {MovieList};