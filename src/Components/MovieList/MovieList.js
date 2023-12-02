import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Movie} from "./Movie";
import css from './MovieList.module.css'
import {getGenres, getMoviesByGenre, getPopularMovies} from "../api";
import {useParams} from "react-router-dom";

const MovieList = ({genre}) => {

    const { genreId } = useParams();
    const [movies, setMovies] = useState([]);
    const [genreName, setGenreName] = useState();

    useEffect(() => {
        const fetchMovies = async () => {
            let fetchedMovies;
            if (genreId) {
                const genres = await getGenres();
                const selectedGenre = genres.find((genre) => genre.id === parseInt(genreId));
                setGenreName(selectedGenre ? selectedGenre.name : "Unknown Genre");
                fetchedMovies = await getMoviesByGenre(genreId);
            } else {
                setGenreName("Popular");
                fetchedMovies = await getPopularMovies();
            }
            setMovies(fetchedMovies);
        };

        fetchMovies();
    }, [genreId]);

    return (
        <div>
            <h2 className={css.Title}>{genreId ? `${genreName}` : 'Popular Movies'}</h2>

            <div className={css.MovieList} >
                {movies.map(movie => <Movie movie={movie}/>)}

                    </div>

            </div>

    );
};


export {MovieList};