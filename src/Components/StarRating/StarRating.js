import React, { useEffect, useState } from 'react';
import ReactStars from 'react-star-ratings';
import { getMovieDetails } from '../api';
import StarRatings from "react-star-ratings/build/star-ratings"; // Замість '../api' вкажіть шлях до вашого файлу, який використовує API TMDb.

const StarRating = ({movieId} ) => {


    const [rating, setRating] = useState(0);
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const movieDetails = await getMovieDetails(movieId); // Викликайте вашу функцію для отримання даних про фільм.
                setRating(movieDetails.vote_average/2); // Припустимо, що vote_average з API є в діапазоні від 0 до 10.
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [movieId]);



    return (
        <div>
            <h2>Movie Rating</h2>
            <StarRatings

                rating={rating}
                starRatedColor='red'

                numberOfStars={5}
                name='rating'
                starDimension = '15px'
            />
            <p>Current Rating: {rating}</p>
        </div>
    );
};
export {StarRating};
