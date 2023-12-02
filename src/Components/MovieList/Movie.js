import React, {useState} from 'react';
import css from './Movie.module.css'
import {useNavigate} from "react-router-dom";


const Movie = ({movie}) => {


    let navigate = useNavigate();
    const getMovieCard = ()=>{
        navigate(`/movieCard/${movie.id}`)
    }
    const {poster_path, title, genreId, vote_average} = movie
    return (
        <div className={css.Container}>
            <img onClick={getMovieCard} className={css.Image} src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title}/>
            <p onClick={getMovieCard} className={css.Title}>{title}</p>

            <p>{vote_average}</p>


        </div>
    );
};

export {Movie};