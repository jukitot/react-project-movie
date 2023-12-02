import React, {useEffect, useState} from 'react';
import {Header} from "../Header/Header";
import {MovieList} from "../MovieList/MovieList";
import {GenreList} from "../Genre/GenreList";

import css from "./MainPage.module.css";

const MoviePage = () => {
    return (
        <div>
            <Header/>
            <div className={css.Block}>
            <GenreList/>
            <MovieList/>
            </div>
        </div>
    );
};

export {MoviePage};