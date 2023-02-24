import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import "./style.css"
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import Modal from "./components/Modal/modal.jsx"
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Profile from "./pages/Profile.jsx";
import Product from "./pages/Product.jsx";
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

    useEffect(() => {
            if (token) {          
            api.getProducts()
            .then(res => res.json())
            .then(data => {                
            setGoods(data.products);
             })
        }
    }, [])
    useEffect(() => {
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
    }}>
        <div className="container">
            <Header/>
            <main>    
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
    </Context.Provider>
    )
}
export default App;

