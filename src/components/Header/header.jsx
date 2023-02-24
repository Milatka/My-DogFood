import React, {useContext} from "react";
import Search from "../Search/search";
import "./style.css";
import Context from "../../Context";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "./img/logo.svg";

export default () => {
    const {user, setUser, setModalActive} = useContext(Context);
    const logIn = (e) => {
        e.preventDefault();        
        setModalActive(prev => !prev);
    }
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user8");
        setUser("");        
    }
    return <header>
        <Link className="logo" to="/"><Logo/></Link>
        <Search/>
            <nav className="menu">
            {user && user.name && <Link to={"profile"}>{user.name}</Link>}
            {user && user.avatar && <img src={user.avatar} alt="фото" style={{width: "70px", height: "70px"}}/>}
            {!user && <Link onClick={logIn}>Войти</Link>}
            {user && <Link onClick={logOut}>Выйти</Link>}
        </nav>
       </header>
}