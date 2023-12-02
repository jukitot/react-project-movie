import axios from 'axios';

const apiKey = '28ea5454eb099812cb3e2842b5b9ba25';

export const getGenres = async () => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
        );
        return response.data.genres;
    } catch (error) {
        console.error('Error fetching genres:', error);
        return [];
    }
};


export const getPopularMovies = async () => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return [];
    }
};


export const getMoviesByGenre = async (genreId) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
        );
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies by genre:', error);
        return [];
    }
};

export const getMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
};

export const searchMovies = async (query) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
        );
        return response.data.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
};
