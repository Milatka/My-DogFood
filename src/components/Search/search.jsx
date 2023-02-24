import React, {useState, useContext} from "react";
import "./style.css";
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
        setVisibleGoods(goods);
    }
    const search = (e) => {
        navigate("/catalog");
        updateText(e.target.value);
        let arr = goods.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchData(arr);
        setVisibleGoods(arr);
    }
    return <div className="search_box">
        <input placeholder="Поиск..." value={text} onChange={search} maxLength="35"/>
        <button>{text ? <CloseImg onClick={clearSearch}/> : <SearchImg/>}</button>
        {text && <div className="search-result">По запросу <b>{text}</b>&nbsp;
            {searchData.length > 0 ? `найдено ${searchData.length} товаров` : "не найдено ни одного товара"}
        </div>}
    </div>
}