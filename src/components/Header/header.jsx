import React, {useContext} from "react";
import Search from "../Search/search";
import "./header.css";
import Context from "../../Context";

export default () => {
    // хук состояния [св-во, функция в качестве аргумента которой передается
    // новое значение нашего св-ва] = useState(аргумент-изначальное зн-е св-ва)
    // const [user, setUser] = useState(localStorage.getItem("user8"));
    // let user = localStorage.getItem("user8");
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
        <a className="logo" href="/">DogFood</a>
        <Search/>
        {/* <input type="search" placeholder="Поиск..." className="search"/> */}
        <nav className="menu">
            {user && user.name && <a href="/Profile">{user.name}</a>}
            {<img src={user.avatar} alt="фото" style={{width: "70px", height: "70px"}}/>}
            {!user && <a href="" onClick={logIn}>Войти</a>}
            {user && <a href="" onClick={logOut}>Выйти</a>}
        </nav>
       </header>
}
