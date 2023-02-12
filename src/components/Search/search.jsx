import React, {useState, useContext} from "react";
import "./search.css";
import {useNavigate} from "react-router-dom";
import {ReactComponent as SearchImg} from "./img/search-glass.svg";
import {ReactComponent as CloseImg} from "./img/xmark.svg";
import Context from "../../Context";

export default () => {
    const {goods, setVisibleGoods} = useContext(Context);
    const navigate = useNavigate();
    const [text, updateText] = useState("");
    const [searchData, setSearchData] = useState(goods.filter(el => el.name.toLowerCase().includes(text.toLowerCase())));

    const clearSearch = () => {
        updateText("");
        setSearchData(goods);
        setVisibleGoods(goods);//после очистки поиска возвращает каталог
    }
    const search = (e) => {
        navigate("/catalog");
        updateText(e.target.value);
        let arr = goods.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchData(arr);
        setVisibleGoods(arr);
    }
    return <div className="search_box">
    <input placeholder="Поиск..." value={text} onChange={search}/>
    <button>{text ? <CloseImg onClick={clearSearch}/> : <SearchImg/>}</button>
    {text && <div className="search-result">
        По запросу <b>{text}</b>&nbsp;
        {searchData.length > 0 ? `найдено ${searchData.length} товаров` : "не найдено ни одного товара"}
        </div>}
    </div>
}