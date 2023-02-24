import React, {useContext} from "react";
import Card from "../components/Card/card.jsx";
import { Link } from "react-router-dom";
import{EmojiExpressionless} from "react-bootstrap-icons";
import Context from "../Context";

export default () => {
    const{visibleGoods, user} = useContext(Context);
    return <>
    {user && <>
    {visibleGoods.length>0
    ? <>
        <h1>Каталог товаров</h1>
        <div className="cards">               
                {visibleGoods.map((el, i) => {return <Link to={`/catalog/${el._id}`} key={el._id}>
                    <Card key={"card_" + i} {...el}/></Link>})}
            </div>
        </>
        : <div className="empty-block">
            <EmojiExpressionless/>
            <p>По вашему запросу товары не найдены</p>
            <Link to ="/" className="lnk"> На главную</Link>
        </div>
        }
    </>}
    {!user && <div className="empty-block">
            <EmojiExpressionless/>
            <p>Необходимо авторизоваться</p>
            <Link to ="/" className="lnk"> На главную</Link>
        </div>}
        </>
}