import React, {useContext, useState} from "react";
import Context from "../../Context";
import "./style.css";

export default ({name, pictures, price, likes, _id, wight}) => {
    const {user, api, setGoods} = useContext(Context);
    const [like, setlike] = useState(likes && likes.includes(user._id));
    const update = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setlike(!like);
        api.setLike(like, _id).then(res => res.json())}
        return <div className="card">
        <img src={pictures} alt={name} style={{width: "150px"}}/>
        {name}
        <h3>{wight}</h3>
        <h6>{price} руб.</h6>
        <button className="btn" style={{width: "150px", height: "50px"}}>Купить</button>
        <span className="card__heart" onClick={update}>
            {
                like
                ? <i className="fa-solid fa-heart"></i> 
                : <i className="fa-regular fa-heart"></i> 
            }                      
            </span>       
    </div>
}

