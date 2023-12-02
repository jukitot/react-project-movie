import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getMovieDetails} from "../api";
import css from "../MovieList/Movie.module.css";

const MovieCardInfo = () => {
    const {movieId} = useParams();
    let [movie, setMovie] = useState();
    useEffect(() => {
        const fetchMovieDetails = async () => {
            const fetchedMovie = await getMovieDetails(movieId);
            setMovie(fetchedMovie);
        };

        fetchMovieDetails();
    }, [movieId]);

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1 className={css.Title_Card}>{movie.title}</h1>
            <div className={css.Block_Card}>
                <p className={css.Overview}>{movie.overview}</p>
                <img className={css.Image_Card} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>

            </div>
            <div className={css.Info}>
                <h4>Info: </h4>
                <p>Original Language: {movie.original_language}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>Status: {movie.status}</p>
            </div>


        </div>
    );
};


export {MovieCardInfo};