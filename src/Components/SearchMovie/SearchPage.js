import React from 'react';
import {Header} from "../Header/Header";
import {Genre} from "../Genre/Genre";
import {GenreList} from "../Genre/GenreList";
import {SearchMovie} from "./SearchMovie";
import css from "../MainPage/MainPage.module.css";
import {MovieList} from "../MovieList/MovieList";

const SearchPage = () => {
    return (
        <div>
            <Header/>
            <div className={css.Block}>
                <div className={css.Nav}>
                    <GenreList/>
                </div>
                <SearchMovie/>
            </div>

        </div>
    );
};

export {SearchPage};