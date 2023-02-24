import React, {useState, useContext} from "react";
import Context from "../../Context";

export default ({change,close}) => {
    const [inpLogin, setInpLogin] = useState("");
    const [inpPassword, setinpPassword] = useState("");
    const [inp3, setInp3] = useState("");
    const [testPsw, setTestPsw] = useState(true);
    const {api, setToken, setUser} = useContext(Context);
    const checkPsw = (val, type="main") => {
        type === "main" ? setinpPassword(val) : setInp3(val);        
        if (val) {
            if (type === "main") {
            setTestPsw(val !== inp3);} 
            else { setTestPsw(val !== inpPassword);}}      
    }
    const sendForm = (e)=> {
        e.preventDefault();
        const body = {
            email: inpLogin,
            password:inpPassword
        }
        api.signUp(body)
        .then(res => res.json())
        .then(data => {            
            if (!data.err) {
                api.signIn(body)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("user8", JSON.stringify(data.data));
                    localStorage.setItem("token8", data.token);
                    setToken(data.token);
                    setUser(data.data.name);
                })
                setInpLogin("");
                setinpPassword("");
                setInp3("");
                close(false);
            } else {
                alert(data.message);                
            }
        })
    }
    return <form onSubmit={sendForm}>
    <input type="email" 
        placeholder="Введите Вашу почту"
        value={inpLogin} 
        required
        onChange={(e) => {setInpLogin(e.target.value)}}/>
    <input type="password" 
        placeholder="Пароль" 
        value={inpPassword}
        required 
        onChange={(e) => {checkPsw(e.target.value)}}/>
    <input type="password" 
        placeholder="Повторите пароль" 
        value={inp3} 
        onChange={(e) => {checkPsw(e.target.value, "secondary")}}/>
    <button className="btn" type="submit" disabled={testPsw}>Зарегистрироваться</button>
    <button className="btn link" type="button" onClick={() => {change(prev => !prev)}}>Войти</button>
    </form>

}