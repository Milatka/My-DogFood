import React, {useState, useContext} from "react";
import "./style.css";
import Signup from "./Signup";
import Login from "./Login";
import Context from "../../Context";

export default () => {
    const [auth, setAuth] = useState(true);
    const {modalActive, setModalActive} = useContext(Context);
    let style = {
        display: modalActive && "flex",
        // display: isActive ? "flex": "none"
    }
    return <div className="modal-container" style={style}>
        <div className="modal">
            <button className="modal-close" onClick={() => setModalActive(false)}/>
            <h2>{auth ? "Войти" : "Зарегистрироваться"}</h2> 
            {/* или <div className="modal-close"/>           */}
            {/* <h2>Зарегистрироваться</h2> */}
            {auth ? <Login change={setAuth} close={setModalActive}/> 
            : 
            <Signup change={setAuth} close={setModalActive}/>}
        </div>
    </div>
}