import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Whatsapp from"./img/WhatsApp.svg";
import Telegram from"./img/Telegram.svg";
import Vk from "./img/VK.svg";

export default () => {
    const year = new Date().getFullYear();
    return <footer>
        <span className="footer__copy">©{year} Made by Milatka</span>
        <Link to="/catalog"><a href=""><h1>Каталог</h1></a></Link>        
        <div className="footer_icon">
            <h4>Мы в социальных сетях</h4>  
           <a href=""><img src= {Whatsapp} alt="Whatsapp" /></a> 
           <a href=""><img src= {Telegram} alt="Telegram" /></a> 
           <a href=""><img src= {Vk} alt="Vk" /></a>          
         </div>
         <div className="footer__contact">
        <h4>Контакты</h4>
        <a href="">8 (888) 888-88-88</a>
        <a href=""> info@dogfood.ru</a>
        </div>        
    </footer>
}