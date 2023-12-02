import React, {useState} from 'react';
import css from './Header.module.css'
import {NavLink, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const home =()=>{
        navigate('/')
    }
    const handleSearch = () => {
        // Ваша логіка для обробки пошукового запиту
        // Наприклад, перенаправлення на сторінку з результатами пошуку
        navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    };
    return (

        <div className={css.Header}>

            <div onClick={home} className={css.Logo_box}><img  className={css.Logo} src="/icons/Logo/cinema.png" alt=""/>
                <div>Movie Info</div>
            </div>

            <div className={css.Search}>
                <input type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}/>
                <button onClick={handleSearch}> Search </button>
            </div>




            <div className={css.User_Box}>
                <div>User</div>
                <div className={css.Avatar}> </div>
            </div>



        </div>
    );
};

export {Header};