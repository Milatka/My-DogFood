import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";

export default () => {
    const {user, setUser} = useContext(Context);
    const navigate = useNavigate();
    const logOut = (e) => {
        e.preventDefault();
        setUser(null);
        localStorage.removeItem("user8");
        navigate("/");
    }
    return <>
    <h1>Личный кабинет</h1>
    <p>Привет, {user && user.name}!</p>
    <img src={user.avatar} alt="фото" style={{width: "100px", height: "100px"}}/>
    <p>Обо мне: {user.about}</p>   
    </>
}