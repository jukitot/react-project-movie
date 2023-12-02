import React, {useEffect, useState} from 'react';

import {Genre} from "./Genre";
import {getGenres} from "../api";
import css from './GenreList.module.css'

const GenreList = () => {
    const [genres, setGenres] = useState([]);



    useEffect(() => {
        const fetchGenres = async () => {
            const fetchedGenres = await getGenres();
            setGenres(fetchedGenres);
        };

        fetchGenres();
    }, []);




    return (
        <div className={css.List}>

            <div className={css.Genres_list}>

                {genres.map(genre => <Genre key={genre.id} genre={genre} name={genre.name}/>)}

            </div>
        </div>
    );
};

export {GenreList};