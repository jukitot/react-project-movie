import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainPage} from "./Components/MainPage/MainPage";
import {MoviePage} from "./Components/MainPage/MoviePage";
import {MovieCardPage} from "./Components/MainPage/MovieCardPage";

import {SearchPage} from "./Components/SearchMovie/SearchPage";


const router = createBrowserRouter([
    {path:'', element:<MainPage/>},
    {path:'/genre/:genreId', element: <MoviePage/>},
    {path:'/movieCard/:movieId', element: <MovieCardPage/>},
    { path: '/search', element: <SearchPage/> }
])

export {router}