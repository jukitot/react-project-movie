import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {searchMovies} from "../api";
import {Movie} from "../MovieList/Movie";

const SearchMovie = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            const searchResults = await searchMovies(query || '');
            setMovies(searchResults);
        };

        fetchSearchResults();
    }, [query]);

    return (
        <div>
            <h2 style={{color:'#b96060', textAlign:'center'}}>Search Results for "{query}"</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {movies.map((movie) => (
                    <div key={movie.id} style={{ margin: '10px' }}>
                        <Movie movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );

};

export {SearchMovie};