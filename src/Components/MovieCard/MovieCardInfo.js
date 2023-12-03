import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getMovieDetails} from "../api";
import css from "../MovieList/Movie.module.css";
import {StarRating} from "../StarRating/StarRating";

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

                {movie.poster_path ?(
                    <img className={css.Image_Card} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
                ):(

                    <img className={css.Image_Error_Card} src="/image/no-photo.png" alt=""/>
                )
                }

            </div>
            <div className={css.Info}>
                <h4>Info: </h4>
                <p><b>Original Language:</b> {movie.original_language}</p>
                <p><b>Release Date:</b> {movie.release_date}</p>
                <p><b>Status:</b> {movie.status}</p>
                <StarRating movieId={movie.id} />
            </div>

        </div>
    );
};

export {MovieCardInfo};