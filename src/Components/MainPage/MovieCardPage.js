import React from 'react';
import {Header} from "../Header/Header";
import {MovieCardInfo} from "../MovieCard/MovieCardInfo";
import {GenreList} from "../Genre/GenreList";
import css from "./MainPage.module.css";

const MovieCardPage = () => {
    return (
        <div>
            <Header/>
            <div className={css.Block}>
            <GenreList/>
            <MovieCardInfo/>
                </div>
        </div>
    );
};

export {MovieCardPage};