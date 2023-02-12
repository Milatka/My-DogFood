import React, {useState, useContext} from "react";
import Context from "../../Context";

export default ({change,close}) => {
    const [inp1, setInp1] = useState("");
    const [inp2, setInp2] = useState("");
    const [inp3, setInp3] = useState("");
    const [testPsw, setTestPsw] = useState(true);
    const {api, setToken, setUser} = useContext(Context);

    const checkPsw = (val, type="main") => {
        type === "main" ? setInp2(val) : setInp3(val);        
        if (val) {
            if (type === "main") {
            setTestPsw(val !== inp3);} 
            else { setTestPsw(val !== inp2);}
        }      
    }
    const sendForm = (e)=> {
        e.preventDefault();
        const body = {
            email: inp1,
            password:inp2
        }
        api.signUp(body)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (!data.err) {
                api.signIn(body)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("user8", JSON.stringify(data.data));
                    localStorage.setItem("token8", data.token);
                    setToken(data.token);
                    setUser(data.data.name);
                })
                setInp1("");
                setInp2("");
                setInp3("");
                close(false);
            } else {
                alert(data.message);
                //отобразить поп-ап с ошибкой
            }
        })
    }


    return <form onSubmit={sendForm}>
    <input type="email" 
        placeholder="Введите Вашу почту"
        value={inp1} 
        required
        onChange={(e) => {setInp1(e.target.value)}}/>

    <input type="password" 
        placeholder="Пароль" 
        value={inp2} 
        onChange={(e) => {checkPsw(e.target.value)}}/>

    <input type="password" 
        placeholder="Повторите пароль" 
        value={inp3} 
        onChange={(e) => {checkPsw(e.target.value, "secondary")}}/>

    <button className="btn" type="submit" disabled={testPsw}>Зарегистрироваться</button>
    <button className="btn link" type="button" onClick={() => {change(prev => !prev)}}>Войти</button>
    </form>

}


