import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import "./style.css"
//import products from "./assets/data.json";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal"
// import Search from "./components/Search/search";
// import Card from "./components/Card";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Profile from "./pages/Profile";
import Product from "./pages/Product";

import {Api} from "./Api";
import Context from "./Context";

const smiles = ["^_^", "=)", "O_o", ";(", "@_@", "^_O", "-_-", ":)"];

const App = () => {
    let usr = localStorage.getItem("user8");
    if (usr) {
        usr = JSON.parse(usr);
    }
    const [user, setUser] = useState(usr);
    const [token, setToken] = useState(localStorage.getItem("token8"));
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(token));
    const [goods, setGoods] = useState([]);
    const [visibleGoods, setVisibleGoods] = useState(goods);
console.log(user)
    useEffect(() => {
        console.log("Hello!")
        console.log(token);
        if (token) {
            //загрузить данные с сервера
            api.getProducts()
            .then(res => res.json())
            .then(data => {
                console.log(data);
            setGoods(data.products);
             })
        }
    }, []) //ф-ия отработает один раз при создании компонента(т.к. без зависимости-пустой массив)

    useEffect(() => {
        console.log("Change token");
        setApi(new Api(token));
        let usr = localStorage.getItem("user8");
    if (usr) {
        usr = JSON.parse(usr);
    }
        setUser(usr);        
    }, [token])

    useEffect(() => {
        if (!user) {
           localStorage.removeItem("token8");
           setToken(null);
        }       
    }, [user])

    useEffect(() => {
        if (token) {
            //загрузить данные с серверв
            api.getProducts()
            .then(res => res.json())
            .then(data => {
            setGoods(data.products);
             })
        }       
    }, [api])

    useEffect(() => {
        setVisibleGoods(goods);
    }, [goods])

    return (
    <Context.Provider value={{
        user: user,        
        token: token,
        api: api,
        modalActive: modalActive,
        goods: goods,
        visibleGoods: visibleGoods,
        setUser: setUser,        
        setToken: setToken,
        setApi: setApi,
        setModalActive: setModalActive,
        setGoods: setGoods,
        setVisibleGoods: setVisibleGoods,
        //PATH: PATH
    }}>
        <div className="container">
            <Header 
                //user={user} 
                //setUser={setUser} 
                // goods={goods}
                // searchGoods={setVisibleGoods} 
                // setModalActive={setModalActive}
               
            />
            <main>        
                {/* {user ? <Catalog data={goods}/> : <Home data={smiles}/>} */}
                <Routes>
                    <Route path="/" element={<Home data={smiles}/>}/>
                    <Route path="/catalog" element={<Catalog data={visibleGoods}/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/catalog/:id" element={<Product/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
        <Modal/>
        {/*  isActiv, setActive- парам, кот.работают внутри компонента Modal
        modalActive, setModalActive - сохраняются внутри параметров */}        
    </Context.Provider>
    )
}

export default App;

