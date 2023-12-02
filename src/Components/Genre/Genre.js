import React, {useState} from 'react';
import {getMoviesByGenre} from "../api";
import {Link, useNavigate} from "react-router-dom";
import css from './GenreList.module.css'

const Genre = ({genre, genreId}) => {
    const navigate = useNavigate();
    const [selectedGenre, setSelectedGenre] = useState(null);

    const handleGenreSelect = (genreId) => {

        setSelectedGenre(genreId);
    };

    const info = ()=>{
        console.log('hello');
    }

    const selectGenre=()=>{
        navigate(`/genre/${genre.id}`)
    }



    return (
        <div>
            <button className={css.Item} onClick={selectGenre} key={genre.id} >
                {genre.name}
            </button>


        </div>
    );
};

export {Genre};