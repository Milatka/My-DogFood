import React, {useContext} from "react";
import Context from "../../Context";
import "./index.css";

export default ({name, pictures, price, author}) => {
    const {user} = useContext(Context);
    const like = author._id===user.id;
    return <div className="card">
        <img src={pictures} alt={name} style={{width: "150px"}}/>
        {name}
        <h7>{price} руб.</h7>
        <button className="btn" style={{width: "150px", height: "50px"}}>Купить</button>
        <span className="card__heart">
            {
                like
                ? <i className="fa-solid fa-heart"></i> 
                : <i className="fa-regular fa-heart"></i> 
            }                      
            </span>       
    </div>
}

