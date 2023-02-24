import React from "react";
import "./style.css";
import pic from "./img/dog.png";
import gift from "./img/gift.png";
import biscuit from "./img/bisc.png";

export default () => {
    return <div className="promo">
        <img src={gift} alt="Gift" className="gft"/>        
        <span>
        <h1>Подарок за первый заказ!</h1>
        Аппетитные печеньки с говяжьей печенью, морковью и топленым молоком</span>
        <img src={biscuit} className="bisc"/>        
        <img src={pic} alt="Dogs"/> 
        <span className="note">*при стоимости заказа с учетом скидок от 1500 руб.</span>
    </div>
}