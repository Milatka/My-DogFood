import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import {useParams, Link} from "react-router-dom";
import Review from "../components/Review/review";
import Context from "../Context";

export default ({}) => {
    const {id} = useParams();    
    const [product, setProduct] = useState({});   
    const {api} = useContext(Context);
    useEffect (() => {
        api.getProduct(id)       
            .then(res => res.json()).then(data => {
               setProduct(data);
            })
    })
    return <>
    <h1>{product.name || "Страница товара"}</h1>
    <Link className="lnk" to="/catalog">Назад</Link>
    <img src={product.pictures} alt="изображение товара" style={{width: "200px", height: "200px"}}/>
    <h2>Отзывы</h2>
    <div className="reviews">
        {product.reviews && product.reviews.length > 0 &&
        product.reviews.map((el, i) => <Review {...el} key={i}/>)}
    </div>
    </>
}