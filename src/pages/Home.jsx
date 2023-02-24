import React from "react";
import Ads from "../components/Ads/ads.jsx";
import {Link} from "react-router-dom";
import {ReactComponent as Pointer} from "./img/pointer.svg"

export default () => {
    return <>
    <div className="advert">
    <h1>Крафтовые лакомства для собак</h1>
        <h4>Всегда свежие лакомства ручной работы с доставкой по России и Миру</h4>
        <Link to="/catalog"><Pointer/> Перейти в каталог</Link>
    </div>
    <Ads/>
    <div><Link className="lnk" to="/catalog"><Pointer/> Больше вкусняшек в каталоге</Link></div> 
     </>
}
