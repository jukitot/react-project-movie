import React, {useEffect, useState} from 'react';
import {Header} from "../Header/Header";
import {MovieList} from "../MovieList/MovieList";
import {GenreList} from "../Genre/GenreList";


import css from './MainPage.module.css'

const MainPage = () => {
    return (
        <div>
            <Header/>
            <div className={css.Block}>
                <div className={css.Nav}>
                <GenreList/>
                </div>
                <MovieList/>
            </div>

        </div>
    );
};

export {MainPage};