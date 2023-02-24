import React from "react";

export default React.createContext({
    user: "",
    token: "",
    api: {},
    avatar: {},
    setUser: () => {},
    setToken: () => {},
    setApi: () => {},
    modalActive: false,
    setModalActive: () => {},
    goods: [],
    setGoods: () => {},
    visibleGoods: [],
    setVisibleGoods: () => {},    
});