import React, {useEffect, useState} from 'react';
import css from './Movie.module.css'
import {useNavigate} from "react-router-dom";
import {StarRating} from "../StarRating/StarRating";



const Movie = ({movie, movieId}) => {


    let navigate = useNavigate();
    const getMovieCard = ()=>{
        navigate(`/movieCard/${movie.id}`)
    }
    const {poster_path, title, genreId, vote_average} = movie
    return (
        <div className={css.Container}>
            {poster_path ?(
                    <img onClick={getMovieCard} className={css.Image} src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title}/>

            ):(

                <img onClick={getMovieCard} className={css.Image_Error} src="/image/no-photo.png" alt=""/>
            )
            }
            <p onClick={getMovieCard} className={css.Title}>{title}</p>


            <StarRating movieId={movie.id} />


        </div>
    );
};

export {Movie};