import React, {useState, useContext} from "react";
import Context from "../../Context";
export default ({change,close}) => {
    const [inpLogin, setInpLogin] = useState("");
    const [inpPassword, setinpPassword] = useState("");
    const {setToken, api} = useContext(Context);  
    const sendForm = (e)=> {
        e.preventDefault();
        const body = {
            email: inpLogin,
            password:inpPassword
        }    
        api.signIn(body)
        .then(res => res.json())
        .then(data => {
            if (!data.err) {
                api.signIn(body)
                .then(res => res.json())
                .then(data => {
            localStorage.setItem("user8", JSON.stringify(data.data));
            localStorage.setItem("token8", data.token);
            setToken(data.token);
            setInpLogin("");
            setinpPassword("");
            close(false);
        })} else {
            alert("Неправильный логин и(или) пароль");                
        }
    })}
    return <form onSubmit={sendForm}>
    <input type="email" 
        placeholder="Введите Вашу почту"
        value={inpLogin} 
        required
        onChange={(e) => {setInpLogin(e.target.value)}}/>
        <input type="password" 
        placeholder="Пароль" 
        value={inpPassword} 
        onChange={(e) => {setinpPassword(e.target.value)}}/>
        <button className="btn" type="submit">Войти</button>
    <button className="btn link" type="button" onClick={() => {change(prev => !prev)}}>Зарегистрироваться</button>
    </form>
}


