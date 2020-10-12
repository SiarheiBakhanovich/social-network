import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='http://vector30.com/wp-content/uploads/2018/01/%D0%BB%D0%BE%D0%B3%D0%BE-1024x576.jpg'></img>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                :<NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;